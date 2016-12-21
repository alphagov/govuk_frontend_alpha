'use strict'

const gulp = require('gulp')
const fractal = require('../../lib/fractal/config/fractal.js') // require the Fractal instance

function serveDynamicFractal () {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
  const serverConfig = {
    sync: true, // automatically refresh browser on change on filesystem change
    port: port
  }

  const server = fractal.web.server(serverConfig)
  const logger = fractal.cli.console

  const logError = err => logger.error(err.message)
  const logRunning = () => logger.success(`Fractal server is now running at ${server.url}`)

  server
    .on('error', logError)
    .start()
    .then(logRunning)
};

gulp.task('fractal:server', serveDynamicFractal)

module.exports.start = serveDynamicFractal
