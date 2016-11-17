'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('browser-sync', done => {
  return browserSync.init({
    proxy: 'localhost:' + (3000 - 50),
    port: 3000,
    ui: false,
    files: ['public/**/*.*', 'app/components/**/*.*', 'app/views/**/*.*'],
    ghostmode: false,
    open: false,
    notify: false,
    logLevel: 'error'
  })
})
