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
require('./lib/tasks/build-images.js')
require('./lib/tasks/build-styles.js')
require('./lib/tasks/build-scripts.js')

require('./lib/tasks/package-npm.js')
require('./lib/tasks/package-gem.js')

require('./lib/tasks/lint.js')
require('./lib/tasks/test.js')

require('./lib/tasks/preview.js')
require('./lib/tasks/start-server.js')

// Run 'gulp help' to list available tasks
gulp.task('help', taskListing.withFilters(null, 'help'))

// Task for cleaning the distribution
gulp.task('clean', () => del([paths.dist + '*', paths.public + '*']))

// Build distribution
// This runs the build task to build the assets from app to dist/bundle
gulp.task('build', cb => {
  runSequence('clean', ['build:templates', 'build:images', 'build:styles', 'build:scripts'], cb)
})

// Linting
gulp.task('lint', ['lint:styles', 'lint:scripts', 'lint:tests'])

// Task to run the tests
// This runs preview first, to copy assets from dist/bundle to /public, then runs the tests
gulp.task('test', cb => {
  runSequence('lint', 'preview', 'test:lib', 'test:toolkit', 'test:preview', cb)
})

// Package the contents of dist
gulp.task('package', cb => {
  runSequence('build', ['package:gem', 'package:npm'], cb)
})

// Start server
// This runs the preview task first then starts the server
gulp.task('start', cb => {
  runSequence('preview', ['start:server'], cb)
})

// Copy files to /public
// This runs the build task first, then copies the assets from dist/bundle to /public
gulp.task('preview', cb => {
  runSequence('build', ['preview:copy:styles', 'preview:copy:images', 'preview:copy:js'], cb)
})
