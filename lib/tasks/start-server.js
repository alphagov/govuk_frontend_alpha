'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('start:server', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
    .on('restart', function () {
      console.log('App restarted...')
    })
})
