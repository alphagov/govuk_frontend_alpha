'use strict'

const paths = require('../../config/paths.json')
const packageJson = require('../../package.json')

// Create a new Fractal instance and export it for use elsewhere if required
const fractal = module.exports = require('@frctl/fractal').create()
const govukFractalTheme = require('../govuk-theme/index.js')

/* Fractal project config
----------------------------------------------------------------------------- */

// Set the project title, version and author
fractal.set('project.title', 'GOV.UK Frontend Alpha')
fractal.set('project.version', 'v' + packageJson.version)
fractal.set('project.author', 'Government Digital Service developers')

/* Fractal components
----------------------------------------------------------------------------- */

// Load the Nunjucks template engine
fractal.components.engine('@frctl/nunjucks')

// Specify a preview layout for a component
fractal.components.set('default.preview', '@preview')

// Variants should default to being collated in rendered previews
fractal.components.set('default.collated', true)

// Set a default status for all components (TODO: default to WIP?)
// fractal.components.set('default.status', null);

// Use the .nunj extension for components (TODO: change this to .njk)
fractal.components.set('ext', '.nunj')

// Tell Fractal where the components will live
fractal.components.set('path', paths.appComponents)

/* Fractal docs
----------------------------------------------------------------------------- */

// Load the Nunjucks template engine
fractal.docs.engine('@frctl/nunjucks')

// Set the file extension for documentation files
fractal.docs.set('ext', '.md')

// Tell Fractal where the documentation pages will live
fractal.docs.set('path', paths.appDocs)

/* Fractal web UI
----------------------------------------------------------------------------- */

// Tell fractal to use the GOV.UK Fractal Theme by default
fractal.web.theme(govukFractalTheme)

// Specify a directory of static assets
fractal.web.set('static.path', paths.public)

// Set the static HTML build destination
fractal.web.set('builder.dest', paths.dist)
