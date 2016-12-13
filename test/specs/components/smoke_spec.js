const expect = require('chai').expect
const nunjucks = require('nunjucks')
const components = require('../../../lib/components')

const expectComponentRenders = (name, input) => {
  let componentPath = components.templatePathFor(name)
  expect(() => {
    nunjucks.render(componentPath, input)
  }).to.not.throw()
}

describe('Components render examples without errors', () => {
  Object.keys(components.all).map(name => {
    it(`${name} component renders all variants without errors`, () => {
      let component = components.get(name)
      let variants = [component.context].concat(component.variants)
      for (let variant of variants) {
        expectComponentRenders(name, variant)
      }
    })
  })
})
