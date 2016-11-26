const expect = require('chai').expect
const nunjucks = require('nunjucks')
const html = require('html')

const normaliseHtml = string => html.prettyPrint(string, {indent_size: 2})

const renderComponent = (name, input) => {
  const componentPath = `app/components/${name}/${name}.nunj`
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
