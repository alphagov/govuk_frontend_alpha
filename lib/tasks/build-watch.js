'use strict'

const paths = require('../../config/paths.json')
const gulp = require('gulp')

gulp.task('watch', ['watch:styles', 'watch:scripts', 'watch:images'])

gulp.task('watch:styles', function () {
  return gulp.watch(
    [
      paths.assetsScss + '**/*.scss',
      paths.srcComponents + '**/*.scss'
    ],
    ['build:styles']
  )
})

gulp.task('watch:scripts', function () {
  return gulp.watch(
    [
      paths.assetsJs + '**/*.js',
      paths.srcComponents + '**/*.js'
    ],
    ['build:scripts']
  )
})

gulp.task('watch:images', function () {
  return gulp.watch(paths.assetsImg + '**/*', ['build:images'])
})
