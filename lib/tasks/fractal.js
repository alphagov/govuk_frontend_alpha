'use strict'

const gulp = require('gulp')
// require the Fractal instance
const fractal = require('../../fractal/config/fractal.js')
// keep a reference to the fractal CLI console utility
const logger = fractal.cli.console

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

// Serve dynamic site (Fractal)
function serve () {
  const server = fractal.web.server({
    sync: true
  })

  server.on('error', err => logger.error(err.message))

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`)
  })
};

gulp.task('fractal:server', function () {
  serve()
})

