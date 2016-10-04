'use strict'

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const assetPath = (asset, version) => `{{ asset_path }}${asset}?${version}`

module.exports.assetPath = assetPath
