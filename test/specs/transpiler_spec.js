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
const nunjucksBlockForWithAssetPath = `{% block stylesheets %}<link href="{{ asset_path + 'file.css' }}" />{% endblock %}`

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
    it('should have a nested correct block_for with asset path inside', function (done) {
      const transpiledBlockForWithAssetPath = `{% block stylesheets %}<link href="{{ asset_path }}file.css?1.0.0" />{% endblock %}`
      transpilationTest(nunjucksTranspiler, nunjucksBlockForWithAssetPath, transpiledBlockForWithAssetPath, done)
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
      const erbTextFor = `<a href="#content" class="skiplink"><% if content_for?(:skip_link_message) %><%= yield(:skip_link_message) %><% else %>Skip to main content<% end %></a>`
      transpilationTest(erbTranspiler, nunjucksTextFor, erbTextFor, done)
    })
    it('should have a correct block_for', function (done) {
      const erbBlockFor = `<% if content_for?(:top_of_page) %><%= yield(:top_of_page) %><% else %><% end %>`
      transpilationTest(erbTranspiler, nunjucksBlockFor, erbBlockFor, done)
    })
    it('should have a correct block_for for the special case content block', function (done) {
      const nunjucksContentBlockFor = `{% block content %}{% endblock %}`
      const erbContentBlockFor = `<%= content_for?(:content) ? yield(:content) : yield %>`
      transpilationTest(erbTranspiler, nunjucksContentBlockFor, erbContentBlockFor, done)
    })
    it('should have a nested correct block_for with asset path inside', function (done) {
      const erbBlockForWithAssetPath = `<% if content_for?(:stylesheets) %><%= yield(:stylesheets) %><% else %><link href="<%= asset_path 'file.css?1.0.0' %>" /><% end %>`
      transpilationTest(erbTranspiler, nunjucksBlockForWithAssetPath, erbBlockForWithAssetPath, done)
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

  describe('Components arguments are defined', () => {
    Object.keys(components.all).map(name => {
      it(`${name}`, () => {
        const component = components.get(name)
        const variants = components.getVariantsFor(name)

        const expectedArgs = component.arguments
        // We're using `setup` to hack around leaky components, it shouldn't
        // exist long term, if it does clearly mark it as magic, eg `__setup`
        const allExpectedArgs = expectedArgs.concat(['setup'])

        // Extract array of context keys (arguments) for each variant
        let allVariantArgs = variants.map(v => Object.keys(v.context))
        // Flattern arrays of argument names (@TODO use underscore `flatten`)
        allVariantArgs = [].concat.apply([], allVariantArgs)
        // Cast to a Set to get unique arg names, and back to array
        allVariantArgs = [...new Set(allVariantArgs)]
        // for (let variant of variants) {
        for (let variantArg of allVariantArgs) {
          expect(variantArg).to.be.oneOf(allExpectedArgs, 'Missing argument definition')
        }
      })
    })
  })
})
