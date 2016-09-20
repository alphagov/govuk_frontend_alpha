'use strict'

var gulp = require('gulp')
var del = require('del')
var transpiler = require('./lib/transpilation/transpiler.js')

// Config for paths
var paths = {
  assets: 'app/assets/',
  assets_scss: 'app/assets/scss/',
  dist: 'dist/',
  templates: 'app/templates/',
  npm: 'node_modules/',
  prototype_scss: 'node_modules/@gemmaleigh/prototype-scss-refactor/**/*.scss' // This can be removed later
}

// Setup tasks
// Copy prototype-scss-refactor into app/assets/scss
// This step can be removed later once these files exist here
gulp.task('copy:prototype-scss-refactor', function () {
  gulp.src(paths.prototype_scss)
    .pipe(gulp.dest(paths.assets_scss))
})

gulp.task('clean', function () {
  return del([paths.dist + '*'])
})

gulp.task('transpile:erb', function () {
  return gulp.src(paths.templates + 'govuk_template.html')
    .pipe(transpiler('erb'))
    .pipe(gulp.dest(paths.dist))
})
