'use strict'

// ERB templates for Ruby

var asset_path = function (value) {
  return `<%= asset_path '${value}' %>`
}

var block_for = function (key, value) {
  let block
  value = value || ''
  if (key === 'content') {
    // ERB needs a default yield
    block = '<%= content_for?(:content) ? yield(:content) : yield %>'
  } else {
    block = `<%= content_for?(:${key}) ? yield(:${key}) : '${value}' %>`
  }
  return block
}

var text_for = function (key, value) {
  value = value || ''
  return block_for(key, value)
}

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
