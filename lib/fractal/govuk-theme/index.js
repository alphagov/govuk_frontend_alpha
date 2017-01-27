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
    'nunjucks',
    'ruby',
    'html',
    'context'
  ],
  // The URL of a stylesheet to apply the to the UI
  styles: [
    'default', // link to the default mandelbrot stylesheet
    '/theme/govuk/css/fractal-govuk-theme.css' // override with a custom stylesheet
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

/**
 * Experimental hack to show README at top level, and individual components/browser
 * at the level below.
 *
 * Based on code from mark @ Fractal: https://gist.github.com/allmarkedup/47dc763b8817b29266f3a589feae069c
 */
customTheme.addLoadPath(path.join(__dirname, 'custom-theme/views'))

/**
 * Override the default handling of the component detail URL in order to
 * render the readme and nothing else.
 *
 * Nunjucks template in this example would live at 'custom-theme/views/pages/components/readme-only.nunj'
 * but can live wherever you want (within the specified bespoke view directory)
 */

customTheme.addRoute('/components/detail/:handle', {
  handle: 'component',
  view: 'pages/components/readme-only.nunj'
}, getHandles)

/**
 * Add another route to handle the component 'browser' route that was overridden
 * above. Browser is now available at /components/browser/{component-or-variant-handle}
 */

customTheme.addRoute('/components/browser/:handle', {
  handle: 'component-browser',
  view: 'pages/components/detail.nunj'
}, getHandles)

// Export the customised theme instance so it can be used in Fractal projects
module.exports = customTheme

function getHandles (app) {
  let handles = []
  app.components.flatten().each(comp => {
    handles.push(comp.handle)
    if (comp.variants().size > 1) {
      comp.variants().each(variant => handles.push(variant.handle))
    }
  })
  handles = handles.map(h => ({handle: h}))
  return handles
}
