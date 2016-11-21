'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('browser-sync', done => {
  return browserSync.init({
    // Set the app to run on port 2950
    // as browser sync is running on port 3000
    proxy: 'localhost:' + (3000 - 50),
    // Browsersync includes a user-interface that is accessed via a separate port.
    port: 3000,
    // Disable UI completely
    ui: false,
    files: ['public/**/*.*', 'app/components/**/*.*', 'app/views/**/*.*'],
    ghostmode: false,
    open: false,
    notify: false,
    logLevel: 'error'
  })
})
