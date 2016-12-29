'use strict'

const changeCase = require('change-case')

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const assetPath = (asset, version) => `{{ asset_path }}${asset}?${version}`

const componentArgs = (fileContents, name, args) => {
  // Components are kebab-case, not a valid macro name, convention is camelCase
  const func = `${changeCase.camelCase(name)}(${args.join(', ')})`
  const parts = [
    `{% macro ${func} %}`,
    fileContents,
    '{% endmacro %}'
  ]
  return parts.join('\n')
}

module.exports.assetPath = assetPath
module.exports.componentArgs = componentArgs
module.exports.fileExt = 'njk'
