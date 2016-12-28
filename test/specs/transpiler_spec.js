const expect = require('chai').expect
const File = require('vinyl')
const components = require('../../lib/components')
const transpiler = require('../../lib/transpilation/transpiler.js')
const nunjucks = require('nunjucks')
const changeCase = require('change-case')
var fs = require('fs')

const transpilationTest = function (transpiler, originalString, expectedString, callback) {
  let inputFile = new File({contents: new Buffer(originalString)})
  transpiler.write(inputFile)
  transpiler.once('data', function (file) {
    expect(file.contents.toString('utf8')).to.equal(expectedString)
    callback()
  })
}

const nunjucksAssetPath = `<link href="{{ asset_path + 'stylesheets/govuk-template.css' }}" media="screen" rel="stylesheet" />`
const nunjucksAssetVersion = '1.0.0'
const nunjucksTextFor = `<a href="#content" class="skiplink">{{ skip_link_message|default('Skip to main content') }}</a>`
const nunjucksBlockFor = `{% block top_of_page %}{% endblock %}`

describe('Transpilation', () => {
  it('should return a Buffer', function (done) {
    let inputFile = new File({contents: new Buffer('test')})
    let testTranspiler = transpiler.transpileTemplate('erb', nunjucksAssetVersion)
    testTranspiler.write(inputFile)
    testTranspiler.once('data', function (file) {
      expect(file.isBuffer()).to.equal(true)
      done()
    })
  })

  describe('into Nunjucks', () => {
    let nunjucksTranspiler

    beforeEach(function () {
      nunjucksTranspiler = transpiler.transpileTemplate('nunjucks', nunjucksAssetVersion)
    })

    it('should have a correct asset_path', function (done) {
      const transpiledAssetPath = `<link href="{{ asset_path }}stylesheets/govuk-template.css?1.0.0" media="screen" rel="stylesheet" />`
      transpilationTest(nunjucksTranspiler, nunjucksAssetPath, transpiledAssetPath, done)
    })
    it('should have a correct text_for', function (done) {
      transpilationTest(nunjucksTranspiler, nunjucksTextFor, nunjucksTextFor, done)
    })
    it('should have a correct block_for', function (done) {
      transpilationTest(nunjucksTranspiler, nunjucksBlockFor, nunjucksBlockFor, done)
    })
  })

  describe('into ERB', () => {
    let erbTranspiler

    beforeEach(function () {
      erbTranspiler = transpiler.transpileTemplate('erb', nunjucksAssetVersion)
    })

    it('should have a correct asset_path for stylesheets', function (done) {
      const erbStylesheetsAssetPath = `<link href="<%= asset_path 'govuk-template.css?1.0.0' %>" media="screen" rel="stylesheet" />`
      transpilationTest(erbTranspiler, nunjucksAssetPath, erbStylesheetsAssetPath, done)
    })
    it('should have a correct asset_path for javascript', function (done) {
      const nunjucksJavascriptAssetPath = `<script src="{{ asset_path + 'javascripts/govuk-template.js' }}"></script>`
      const erbJavascriptAssetPath = `<script src="<%= asset_path 'govuk-template.js?1.0.0' %>"></script>`
      transpilationTest(erbTranspiler, nunjucksJavascriptAssetPath, erbJavascriptAssetPath, done)
    })
    it('should have a correct asset_path for images', function (done) {
      const nunjucksImageAssetPath = `<img src="{{ asset_path + 'images/govuk-template.png' }}" alt="" />`
      const erbImageAssetPath = `<img src="<%= asset_path 'govuk-template.png?1.0.0' %>" alt="" />`
      transpilationTest(erbTranspiler, nunjucksImageAssetPath, erbImageAssetPath, done)
    })
    it('should have a correct text_for', function (done) {
      const erbTextFor = `<a href="#content" class="skiplink"><%= content_for?(:skip_link_message) ? yield(:skip_link_message) : 'Skip to main content'.html_safe %></a>`
      transpilationTest(erbTranspiler, nunjucksTextFor, erbTextFor, done)
    })
    it('should have a correct block_for', function (done) {
      const erbBlockFor = `<%= content_for?(:top_of_page) ? yield(:top_of_page) : ''.html_safe %>`
      transpilationTest(erbTranspiler, nunjucksBlockFor, erbBlockFor, done)
    })
    it('should have a correct block_for for the special case content block', function (done) {
      const nunjucksContentBlockFor = `{% block content %}{% endblock %}`
      const erbContentBlockFor = `<%= content_for?(:content) ? yield(:content) : yield %>`
      transpilationTest(erbTranspiler, nunjucksContentBlockFor, erbContentBlockFor, done)
    })
  })

  describe('into Handlebars', () => {
    let handlebarsTranspiler

    beforeEach(function () {
      handlebarsTranspiler = transpiler.transpileTemplate('handlebars', nunjucksAssetVersion)
    })

    it('should have a correct asset_path', function (done) {
      const handlebarsAssetPath = `<link href="{{{ asset_path }}}stylesheets/govuk-template.css?1.0.0" media="screen" rel="stylesheet" />`
      transpilationTest(handlebarsTranspiler, nunjucksAssetPath, handlebarsAssetPath, done)
    })
    it('should have a correct text_for', function (done) {
      const handlebarsTextFor = `<a href="#content" class="skiplink">{{#if skip_link_message}}{{{ skip_link_message }}}{{else}}Skip to main content{{/if}}</a>`
      transpilationTest(handlebarsTranspiler, nunjucksTextFor, handlebarsTextFor, done)
    })
    it('should have a correct block_for', function (done) {
      const handlebarsBlockFor = `{{#if top_of_page}}{{{ top_of_page }}}{{else}}{{/if}}`
      transpilationTest(handlebarsTranspiler, nunjucksBlockFor, handlebarsBlockFor, done)
    })
  })

  describe('into Django', () => {
    let djangoTranspiler

    beforeEach(function () {
      djangoTranspiler = transpiler.transpileTemplate('django', nunjucksAssetVersion)
    })

    it('should have a correct asset_path', function (done) {
      const djangoAssetPath = `<link href="{% static 'stylesheets/govuk-template.css?1.0.0' %}" media="screen" rel="stylesheet" />`
      transpilationTest(djangoTranspiler, nunjucksAssetPath, djangoAssetPath, done)
    })
    it('should have a correct text_for', function (done) {
      const djangoTextFor = `<a href="#content" class="skiplink">{{ skip_link_message|default:'Skip to main content' }}</a>`
      transpilationTest(djangoTranspiler, nunjucksTextFor, djangoTextFor, done)
    })
    it('should have a correct block_for', function (done) {
      const djangoBlockFor = `{% block top_of_page %}{% endblock %}`
      transpilationTest(djangoTranspiler, nunjucksBlockFor, djangoBlockFor, done)
    })
  })

  describe('Component transpilation equivalence', () => {
    const allComponents = components.all

    Object.keys(allComponents).map(name => {
      const component = components.get(name)
      const sourcePath = components.templatePathFor(name)
      const variants = components.getVariantsFor(name)

      describe(`${component.title} into Nunjucks`, () => {
        for (let variant of variants) {
          let expected = nunjucks.render(sourcePath, variant.context)

          it(`${name}:${variant.name} should have the same output after transpile`, function () {
            let transpiledTemplate = transpiler.transpileComponentSync('nunjucks', name, fs.readFileSync(sourcePath).toString())
            let invocation = `{{ ${changeCase.camelCase(name)}(${component.arguments.join(', ')}) }}`
            let output = nunjucks.renderString(transpiledTemplate + invocation, variant.context)
            // Trim leading/trailing whistespace, macro def results in new lines
            expect(output.trim()).to.equal(expected.trim())
          })
        }
      })
    })
  })
})
