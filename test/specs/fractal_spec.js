/* eslint-env mocha */
const path = require('path')
const fs = require('fs')
const assert = require('assert')

// Check that everything is in place for Fractal to run

// Check the build tasks has copied the assets to public
describe('the build task', () => {
  it('should copy assets into the /public directory', function () {
    assert.doesNotThrow(function () {
      fs.accessSync(path.resolve(__dirname, '../../public/javascripts/elements.js'))
      fs.accessSync(path.resolve(__dirname, '../../public/javascripts/govuk-template.js'))
      fs.accessSync(path.resolve(__dirname, '../../public/javascripts/toolkit.js'))
      fs.accessSync(path.resolve(__dirname, '../../public/images/crests/bis_crest_13px.png'))
      fs.accessSync(path.resolve(__dirname, '../../public/images/template/apple-touch-icon-120x120.png'))
      fs.accessSync(path.resolve(__dirname, '../../public/images/toolkit/accordion-arrow-2x.png'))
      fs.accessSync(path.resolve(__dirname, '../../public/stylesheets/govuk-template-print.css'))
      fs.accessSync(path.resolve(__dirname, '../../public/stylesheets/govuk-frontend.css'))
    })
  })
})

// Check the theme tasks has compiled the theme stylesheet
describe('the theme task', () => {
  it('should compile the sass to css in the /fractal/govuk-theme directory', function () {
    assert.doesNotThrow(function () {
      fs.accessSync(path.resolve(__dirname, '../../fractal/govuk-theme/assets/css/fractal-govuk-theme.css'))
    })
  })
})
