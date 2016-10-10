'use strict'

const packageJson = require('./package.json')
const version = packageJson.version

// Gulp utility
const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')

// Templates
const transpiler = require('./lib/transpilation/transpiler.js')

// Styles
const sass = require('gulp-sass')
const sasslint = require('gulp-sass-lint')
const nano = require('gulp-cssnano')

// Javascript
const standard = require('gulp-standard')
const rollup = require('rollup-stream')
const vinylSource = require('vinyl-source-stream')
const vinylBuffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const uglifySaveLicense = require('uglify-save-license')

// Testing
const mocha = require('gulp-mocha')

// Configuration
const paths = require('./config/paths.js')

// Task for cleaning the distribution
gulp.task('clean', () => {
  return del([paths.dist + '*'])
})

// Task for transpiling the templates
let transpileRunner = templateLanguage => {
  return gulp.src(paths.templates + '*.html')
    .pipe(transpiler(templateLanguage, version))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.distTemplates))
}
gulp.task('transpile', ['transpile:nunjucks', 'transpile:erb', 'transpile:handlebars', 'transpile:django'])
gulp.task('transpile:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('transpile:erb', transpileRunner.bind(null, 'erb'))
gulp.task('transpile:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('transpile:django', transpileRunner.bind(null, 'django'))

// Compile Sass to CSS
gulp.task('styles', ['styles:build', 'styles:copy'])
gulp.task('styles:build', function () {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sasslint({
      config: paths.config + '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.distCSS))
    .pipe(rename({ suffix: '.min' }))
    .pipe(nano())
    .pipe(gulp.dest(paths.distCSS))
})
gulp.task('styles:copy', function () {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(gulp.dest(paths.distScss))
})

// Build single Javascript file from modules
let scriptsBuilder = fileName => {
  return rollup({
    entry: paths.assetsJs + 'template/' + fileName + '.js',
    context: 'window'
  })
    .pipe(vinylSource(fileName + '.js'))
    .pipe(gulp.dest(paths.distJs))
    .pipe(vinylBuffer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({
      preserveComments: uglifySaveLicense
    }))
    .pipe(gulp.dest(paths.distJs))
}
gulp.task('scripts', ['scripts:lint', 'scripts:govuk-template', 'scripts:govuk-template-ie'])
gulp.task('scripts:lint', () => {
  gulp.src([
    '!' + paths.assetsJs + '**/vendor/**/*.js',
    paths.assetsJs + '**/*.js'
  ])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})
gulp.task('scripts:govuk-template', scriptsBuilder.bind(null, 'govuk-template'))
gulp.task('scripts:govuk-template-ie', scriptsBuilder.bind(null, 'govuk-template-ie'))

// Task to run the tests
gulp.task('test', () => gulp.src(paths.specs + '*.js', {read: false})
  .pipe(mocha())
)

// Build distribution
gulp.task('build', ['clean', 'transpile', 'styles', 'scripts'])
