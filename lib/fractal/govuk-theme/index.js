'use strict'
const path = require('path')

/* Fractal theme
----------------------------------------------------------------------------- */

// Require the mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot')

// Configure a custom theme
const customTheme = mandelbrot({
  // Mandelbrot offers a pre-defined set of colour ‘skins’ that you can apply to the UI for quick and easy customisation
  'skin': 'black',
  // The nav sections that should show up in the sidebar (and in which order)
  'nav': [
    'docs',
    'components'
  ],
  // The component info panels that should be displayed in the component browser (and in which order the tabs should be displayed)
  'panels': [
    'notes',
    'html',
    'view',
    'context',
    'resources',
    'info'
  ],
  // The URL of a stylesheet to apply the to the UI
  styles: [
    'default', // link to the default mandelbrot stylesheet
    'theme/govuk/css/fractal-govuk-theme.css' // override with a custom stylesheet
  ],
  // Virtual path prefix for the theme’s static assets. The value of this is prepended to the generated theme static asset URLs.
  'static': {
    'mount': 'theme'
  }
})

// Specify a template directory to override any view templates
customTheme.addLoadPath(path.join(__dirname, 'views'))

// Specify the static assets directory that contains the custom stylesheet
customTheme.addStatic(path.join(__dirname, 'assets'), 'theme/govuk')

// Export the customised theme instance so it can be used in Fractal projects
module.exports = customTheme
