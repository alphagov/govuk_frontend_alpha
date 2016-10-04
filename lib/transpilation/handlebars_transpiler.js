'use strict'

// Handlebars templates
// http://handlebarsjs.com/

const assetPath = (asset, version) => `{{{ asset_path }}}${asset}?${version}`
const blockFor = (key, defaultContent = '') => `{{#if ${key}}}{{{ ${key} }}}{{else}}${defaultContent}{{/if}}`
const textFor = (key, defaultContent = '') => blockFor(key, defaultContent)

module.exports.assetPath = assetPath
module.exports.blockFor = blockFor
module.exports.textFor = textFor
