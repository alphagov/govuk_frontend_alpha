'use strict'

// Django templates for Python

const assetPath = (asset, version) => `{% static '${asset}?${version}' %}`
const blockFor = (key, defaultContent = '') => `{% block ${key} %}${defaultContent}{% endblock %}`
const textFor = (key, defaultContent = '') => `{{ ${key}|default:'${defaultContent}' }}`

module.exports.assetPath = assetPath
module.exports.blockFor = blockFor
module.exports.textFor = textFor
