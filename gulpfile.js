'use strict'

var gulp = require('gulp')
var del = require('del')
var rename = require('gulp-rename')
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

var transpileRunner = function (templateLanguage) {
  return gulp.src(paths.templates + 'govuk_template.html')
    .pipe(transpiler(templateLanguage))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.dist))
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

gulp.task('transpile', ['transpile:erb', 'transpile:handlebars'])
gulp.task('transpile:erb', transpileRunner.bind(null, 'erb'))
gulp.task('transpile:handlebars', transpileRunner.bind(null, 'handlebars'))
