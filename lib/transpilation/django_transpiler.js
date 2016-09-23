'use strict'

// Django templates for Python

const asset_path = asset => `{% static '${asset}' %}`
const block_for = (key, defaultContent = '') => `{% block ${key} %}${defaultContent}{% endblock %}`
const text_for = (key, defaultContent = '') => `{{ ${key}|default:'${defaultContent}' }}`

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
