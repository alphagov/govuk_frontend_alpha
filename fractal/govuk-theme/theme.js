'use strict'

const path = require('path')

/* Fractal theme
----------------------------------------------------------------------------- */

// Require the mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot')

// Configure a custom theme
const customTheme = mandelbrot({
  'skin': 'black',
  styles: [
    'default', // link to the default mandelbrot stylesheet
    '/fractal/govuk-theme/fractal-govuk-theme.css' // override with a custom stylesheet
  ],
  'nav': [
    'docs',
    'components'
  ],
  'panels': [
    'notes',
    'html',
    'view',
    'context',
    'resources',
    'info'
  ],
  'static': {
    'mount': 'theme'
  }
})

// Specify a template directory to override any view templates
customTheme.addLoadPath(path.join(__dirname, '/fractal/govuk-theme/theme-overrides'))

// Specify the static assets directory that contains the custom stylesheet.
customTheme.addStatic(path.join(__dirname, '/fractal/govuk-theme/'))

// Export the customised theme instance so it can be used in Fractal projects
module.exports = customTheme
