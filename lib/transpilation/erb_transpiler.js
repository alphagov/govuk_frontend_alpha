'use strict'

// ERB templates for Ruby

const assetPath = (asset, version) => {
  asset = asset.replace(/^stylesheets\/|javascripts\/|images\//, '')
  return `<%= asset_path '${asset}?${version}' %>`
}
const blockFor = (key, defaultContent = '') => {
  if (key === 'content') {
    // ERB needs a default yield
    return '<%= content_for?(:content) ? yield(:content) : yield %>'
  } else if (defaultContent === '') {
    // Use short-form if no default reuire
    return `<%= yield(:${key}) if content_for?(:${key}) %>`
  } else {
    // Allows default to include other nested ERB syntax
    return `<% if content_for?(:${key}) %><%= yield(:${key}) %><% else %>${defaultContent}<% end %>`
  }
}
const textFor = (key, defaultContent = '') => blockFor(key, defaultContent)

const componentArgs = (fileContents, name, args) => {
  const defaults = args.map((arg) => `<% ${arg} = ${arg} or nil %>`)
  return [
    defaults.join('\n'),
    fileContents
  ].join('\n')
}

module.exports.assetPath = assetPath
module.exports.blockFor = blockFor
module.exports.textFor = textFor
module.exports.componentArgs = componentArgs
