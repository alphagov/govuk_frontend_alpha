'use strict'

// Handlebars templates
// http://handlebarsjs.com/

const asset_path = (asset, version) => `{{{ asset_path }}}${asset}?${version}`
const block_for = (key, defaultContent = '') => `{{#if ${key}}}{{{ ${key} }}}{{else}}${defaultContent}{{/if}}`
const text_for = (key, defaultContent = '') => block_for(key, defaultContent)

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
