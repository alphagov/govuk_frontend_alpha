'use strict'

// Nunjucks templates
// The original template is already in Nunjucks, but needs version markers added

const asset_path = (asset, version) => `{{ asset_path }}${asset}?${version}`

module.exports.asset_path = asset_path
