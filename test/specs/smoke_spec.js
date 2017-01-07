'use strict'

const expect = require('chai').expect

// Components
const nunjucks = require('nunjucks')
const components = require('../../lib/components')

// Styles
const paths = require('../../config/paths.json')
const sass = require('node-sass')

const expectComponentRenders = (name, input) => {
  let componentPath = components.templatePathFor(name)
  expect(() => {
    nunjucks.render(componentPath, input)
  }).to.not.throw()
}

describe('All components variants render without errors', () => {
  Object.keys(components.all).map(name => {
    describe(`${name}`, () => {
      let variants = components.getVariantsFor(name)
      for (let variant of variants) {
        it(`${variant.name}`, () => {
          console.log(variant.context)
          expectComponentRenders(name, variant.context)
        })
      }
    })
  })
})

describe('Styles', () => {
  it('should compile', done => {
    sass.render({
      file: paths.bundleScss + 'govuk-frontend.scss'
    }, error => {
      expect(error).to.equal(null)
      done()
    })
  })
})
