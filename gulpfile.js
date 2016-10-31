'use strict'

const packageJson = require('./package.json')

// Gulp utility
const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const taskListing = require('gulp-task-listing')

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
const jasmineBrowser = require('gulp-jasmine-browser')
const SpecReporter = require('jasmine-spec-reporter')

// Packaging
const tar = require('gulp-tar')
const gzip = require('gulp-gzip')
const run = require('gulp-run')
const packageName = packageJson.name + '-' + packageJson.version

// Configuration
const paths = require('./config/paths.json')

// Run 'gulp help' to list available tasks
gulp.task('help', taskListing.withFilters(null, 'help'))

// Task for cleaning the distribution
gulp.task('clean', () => {
  return del([paths.dist + '*'])
})

// Task for transpiling the templates
let transpileRunner = templateLanguage => {
  return gulp.src(paths.templates + '*.html')
    .pipe(transpiler(templateLanguage, packageJson.version))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.bundleTemplates))
}
gulp.task('build:templates', ['build:templates:nunjucks', 'build:templates:erb', 'build:templates:handlebars', 'build:templates:django'])
gulp.task('build:templates:nunjucks', transpileRunner.bind(null, 'nunjucks'))
gulp.task('build:templates:erb', transpileRunner.bind(null, 'erb'))
gulp.task('build:templates:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('build:templates:django', transpileRunner.bind(null, 'django'))

// Compile Sass to CSS
gulp.task('build:styles', cb => {
  runSequence('lint:styles', ['build:styles:copy', 'build:styles:compile'], cb)
})
gulp.task('build:styles:compile', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.bundleCss))
    .pipe(rename({ suffix: '.min' }))
    .pipe(nano())
    .pipe(gulp.dest(paths.bundleCss))
})
gulp.task('build:styles:copy', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(gulp.dest(paths.bundleScss))
})

// Build single Javascript file from modules
let scriptsBuilder = fileName => {
  return rollup({
    entry: paths.assetsJs + fileName + '.manifest.js',
    context: 'window'
  })
    .pipe(vinylSource(fileName + '.js'))
    .pipe(gulp.dest(paths.bundleJs))
    .pipe(vinylBuffer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({
      preserveComments: uglifySaveLicense
    }))
    .pipe(gulp.dest(paths.bundleJs))
}
gulp.task('build:scripts', cb => {
  runSequence('lint:scripts', [
    'build:scripts:copy',
    'build:scripts:elements',
    'build:scripts:govuk-template',
    'build:scripts:govuk-template-ie',
    'build:scripts:toolkit'
  ], cb)
})
gulp.task('build:scripts:elements', scriptsBuilder.bind(null, 'elements'))
gulp.task('build:scripts:govuk-template', scriptsBuilder.bind(null, 'govuk-template'))
gulp.task('build:scripts:govuk-template-ie', scriptsBuilder.bind(null, 'govuk-template-ie'))
gulp.task('build:scripts:toolkit', scriptsBuilder.bind(null, 'toolkit'))
gulp.task('build:scripts:copy', () => {
  gulp.src(paths.assetsJs + '**/*.js')
    .pipe(gulp.dest(paths.bundleJs))
})

// Task to run the tests
gulp.task('test', ['test:lib', 'test:toolkit'])
gulp.task('test:lib', () => gulp.src(paths.testSpecs + '*.js', {read: false})
  .pipe(mocha())
)
// Ideally these pre-existing toolkit tests will be rewritten at some point
// to use mocha rather than requiring Jasmine as well.
gulp.task('test:toolkit', () => gulp.src([
  paths.node_modules + 'jquery/dist/jquery.js',
  paths.assetsJs + 'toolkit/**/*.js',
  paths.testSpecs + 'toolkit/unit/**/*.spec.js'
])
  .pipe(jasmineBrowser.specRunner({console: true}))
  .pipe(jasmineBrowser.headless({reporter: new SpecReporter()}))
)

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])
gulp.task('lint:styles', () => {
  gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sasslint())
    // if the .yml file is in /config, this fails :(
    // .pipe(sasslint({
    //   config: paths.config + '.sass-lint.yml'
    // }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})
gulp.task('lint:scripts', () => {
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
gulp.task('lint:tests', () => {
  gulp.src(paths.test + '**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

// Build distribution
gulp.task('build', cb => {
  runSequence('clean', ['build:templates', 'build:styles', 'build:scripts'], cb)
})

// Package the contents of dist
gulp.task('package', ['package:tgz'])
gulp.task('package:tgz', () => {
  gulp.src(paths.bundle + '*')
    .pipe(tar(packageName + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest(paths.pkg))
})

gulp.task('package:gem', () => {
  runSequence('package:gem:prepare', 'package:gem:build', 'package:gem:copy', 'package:gem:clean')
})

gulp.task('package:gem:prepare', () => {
  gulp.src(paths.bundleCss + '**/*').pipe(gulp.dest(paths.gemCss))
  gulp.src(paths.bundleScss + '**/*').pipe(gulp.dest(paths.gemScss))
  gulp.src(paths.bundleJs + '**/*').pipe(gulp.dest(paths.gemJs))
  gulp.src(paths.bundleTemplates + '**/*').pipe(gulp.dest(paths.gemTemplates))
  return gulp.src(`lib/packaging/gem/${packageJson.name}.gemspec`).pipe(gulp.dest(paths.gem))
})

gulp.task('package:gem:build', () => run(`cd ${paths.gem} && gem build ${packageJson.name}.gemspec`).exec())
gulp.task('package:gem:copy', () => gulp.src(`${paths.gem}${packageName}.gem`).pipe(gulp.dest(paths.pkg)))
gulp.task('package:gem:clean', () => del(`${paths.gem}${packageName}.gem`))

gulp.task('package:npm', () => {
  gulp.src(paths.bundleCss + '**/*').pipe(gulp.dest(paths.npmCss))
  gulp.src(paths.bundleScss + '**/*').pipe(gulp.dest(paths.npmScss))
  gulp.src(paths.bundleJs + '**/*').pipe(gulp.dest(paths.npmJs))
  gulp.src(paths.bundleTemplates + '**/*').pipe(gulp.dest(paths.npmTemplates))
  return gulp.src('./lib/packaging/npm/package.json').pipe(gulp.dest(paths.npm))
})
