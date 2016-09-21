'use strict'

// Django templates for Python

var asset_path = function (value) {
  return `{% static '${value}' %}`
}

var block_for = function (key, value) {
  value = value || ''
  return `{% block ${key} %}${value}{% endblock %}`
}

var text_for = function (key, value) {
  value = value || ''
  return `{{ ${key}|default:'${value}' }}`
}

module.exports.asset_path = asset_path
module.exports.block_for = block_for
module.exports.text_for = text_for
