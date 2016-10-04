'use strict'

// ERB templates for Ruby

const assetPath = (asset, version) => {
  asset = asset.replace(/^stylesheets\/|javascript\/|images\//, '')
  return `<%= asset_path '${asset}?${version}' %>`
}
const blockFor = (key, defaultContent = '') => {
  if (key === 'content') {
    // ERB needs a default yield
    return '<%= content_for?(:content) ? yield(:content) : yield %>'
  } else {
    return `<%= content_for?(:${key}) ? yield(:${key}) : '${defaultContent}'.html_safe %>`
  }
}
const textFor = (key, defaultContent = '') => blockFor(key, defaultContent)

module.exports.assetPath = assetPath
module.exports.blockFor = blockFor
module.exports.textFor = textFor
