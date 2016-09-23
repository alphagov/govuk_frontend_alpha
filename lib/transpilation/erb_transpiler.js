'use strict'

// ERB templates for Ruby

const asset_path = asset => `<%= asset_path '${asset}' %>`
const block_for = (key, defaultContent = '') => {
  if (key === 'content') {
    // ERB needs a default yield
    return '<%= content_for?(:content) ? yield(:content) : yield %>'
  } else {
    return `<%= content_for?(:${key}) ? yield(:${key}) : '${defaultContent}' %>`
  }
}
const text_for = (key, defaultContent = '') => block_for(key, defaultContent)

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
