'use strict'

// Configuration
const packageJson = require('./package.json')
const paths = require('./config/paths.json')
exports.packageName = packageJson.name + '-' + packageJson.version

// Gulp utility
const gulp = require('gulp')
const del = require('del')
const runSequence = require('run-sequence')
const taskListing = require('gulp-task-listing')

// Gulp sub-tasks
require('./lib/tasks/build-templates.js')
require('./lib/tasks/build-components.js')
require('./lib/tasks/build-images.js')
require('./lib/tasks/build-styles.js')
require('./lib/tasks/build-scripts.js')
require('./lib/tasks/build-watch.js')

require('./lib/tasks/package-npm.js')
require('./lib/tasks/package-gem.js')

require('./lib/tasks/lint.js')
require('./lib/tasks/test.js')

require('./lib/tasks/fractal.js')
require('./lib/tasks/fractal-assets.js')
require('./lib/tasks/fractal-build.js')
require('./lib/tasks/fractal-watch.js')

// Run 'gulp help' to list available tasks
gulp.task('help', taskListing.withFilters(null, 'help'))

// Task for cleaning the distribution
gulp.task('clean', () => del([paths.dist + '*', paths.public + '*']))

// Build distribution
// This runs the build task to build the assets from app to dist/bundle
gulp.task('build', cb => {
  runSequence('clean', ['build:templates', 'build:components', 'build:images', 'build:styles', 'build:scripts'], cb)
})

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])

// Task to run the tests
gulp.task('test', cb => {
  runSequence('lint', 'test:smoke', 'test:lib', 'test:components', 'test:toolkit', 'fractal:test', cb)
})

// Package the contents of dist
gulp.task('package', cb => {
  runSequence('build', ['package:gem', 'package:npm'], cb)
})

// Fractal
// This compiles the Fractal theme's assets, starts Fractal and watches for changes to Fractal's assets
// and re-runs the build tasks if any of the apps assets have changed
gulp.task('fractal', cb => {
  runSequence('build', 'fractal:assets', 'fractal:server', 'fractal:watch', 'watch', cb)
})

// Test Fractal
// This runs gulp:build before testing the Fractal task, to copy assets to /public
// This also runs the fractal:assets task to compile the fractal theme stylesheet
gulp.task('fractal:test', cb => {
  runSequence('build', 'fractal:assets', 'test:fractal', cb)
})
