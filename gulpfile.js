'use strict'

const packageJson = require('./package.json')
const version = packageJson.version

const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const transpiler = require('./lib/transpilation/transpiler.js')
const mocha = require('gulp-mocha')

const sass = require('gulp-sass')
const sasslint = require('gulp-sass-lint')

// Config for paths
const paths = {
  assets: 'app/assets/',
  assetsScss: 'app/assets/scss/',
  dist: 'dist/',
  distCSS: 'dist/assets/css/',
  templates: 'app/templates/',
  npm: 'node_modules/',
  specs: 'test/specs/'
}

// Task for cleaning the distribution
gulp.task('clean', () => {
  return del([paths.dist + '*'])
})

// Task for transpiling the templates
let transpileRunner = templateLanguage => {
  return gulp.src(paths.templates + '*.html')
    .pipe(transpiler(templateLanguage, version))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.dist))
}
gulp.task('transpile', ['transpile:nunjucks', 'transpile:erb', 'transpile:handlebars', 'transpile:django'])
gulp.task('transpile:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('transpile:erb', transpileRunner.bind(null, 'erb'))
gulp.task('transpile:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('transpile:django', transpileRunner.bind(null, 'django'))

// Compile Sass to CSS
gulp.task('styles', function() {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sasslint({
      config: '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.distCSS));
});

// Task to run the tests
gulp.task('test', () => gulp.src(paths.specs + '*.js', {read: false})
  .pipe(mocha())
)

