'use strict'

// Handlebars templates
// http://handlebarsjs.com/

var asset_path = function (value) {
  return `{{{ asset_path }}}${value}`
}

var block_for = function (key, value) {
  value = value || ''
  return `{{#if ${key}}}{{{ ${key} }}}{{else}}${value}{{/if}}`
}

var text_for = function (key, value) {
  value = value || ''
  return block_for(key, value)
}

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
