const expect = require('chai').expect
const nunjucks = require('nunjucks')
const components = require('../../../lib/components')

const expectComponentRenders = (name, input) => {
  let componentPath = components.templatePathFor(name)
  expect(() => {
    nunjucks.render(componentPath, input)
  }).to.not.throw()
}

describe('All components variants render without errrors', () => {
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
