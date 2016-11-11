'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')

const sasslint = require('gulp-sass-lint')
const standard = require('gulp-standard')

gulp.task('lint:styles', () => {
  return gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(sasslint())
    // if the .yml file is in /config, this fails :(
    // .pipe(sasslint({
    //   config: paths.config + '.sass-lint.yml'
    // }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})
gulp.task('lint:scripts', () => {
  return gulp.src([
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
  return gulp.src(paths.test + '**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})
