'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')

gulp.task('preview:copy:styles', () => {
  return gulp.src(paths.bundleCss + '*.css')
    .pipe(gulp.dest(paths.publicCss))
})

gulp.task('preview:copy:images', () => {
  return gulp.src(paths.bundleImg + '**/*')
    .pipe(gulp.dest(paths.publicImg))
})

gulp.task('preview:copy:js', () => {
  return gulp.src(paths.bundleJs + '**/*.js')
    .pipe(gulp.dest(paths.publicJs))
})
