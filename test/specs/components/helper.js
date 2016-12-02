const expect = require('chai').expect
const nunjucks = require('nunjucks')
const html = require('html')
const components = require('../../../lib/components')

const normaliseHtml = string => html.prettyPrint(string, {indent_size: 2})

const renderComponent = (name, input) => {
  const componentPath = components.templatePathFor(name)
  return nunjucks.render(componentPath, input)
}

const expectComponent = (name, input, expected) => {
  // Normalise HTML whitespace, to make diffing simpler
  expect(
    normaliseHtml(renderComponent(name, input))
  ).to.equal(
    normaliseHtml(expected)
  )
}

module.exports.expectComponent = expectComponent
