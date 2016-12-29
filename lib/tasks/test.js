'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')

const mocha = require('gulp-mocha')
const jasmineBrowser = require('gulp-jasmine-browser')
const SpecReporter = require('jasmine-spec-reporter')

gulp.task('test:lib', () => gulp.src(paths.testSpecs + 'transpiler_spec.js', {read: false})
  .pipe(mocha({reporter: 'spec'}))
)

gulp.task('test:components', () => gulp.src([
  paths.testSpecs + 'components/' + '**/*',
  paths.srcComponents + '**/*.spec.js'
], {read: false})
  .pipe(mocha({reporter: 'spec'}))
)

// Ideally these pre-existing toolkit tests will be rewritten at some point
// to use mocha rather than requiring Jasmine as well.
gulp.task('test:toolkit', () => gulp.src([
  paths.nodeModules + 'jquery/dist/jquery.js',
  paths.assetsJs + 'toolkit/**/*.js',
  paths.testSpecs + 'toolkit/unit/**/*.spec.js'
])
  .pipe(jasmineBrowser.specRunner({console: true}))
  .pipe(jasmineBrowser.headless({reporter: new SpecReporter()}))
)

gulp.task('test:fractal', () => gulp.src(paths.testSpecs + 'fractal_spec.js', {read: false})
  .pipe(mocha({reporter: 'spec'}))
  // https://github.com/sindresorhus/gulp-mocha#test-suite-not-exiting
  .once('error', () => {
    process.exit(1)
  })
  .once('end', () => {
    process.exit()
  })
)
