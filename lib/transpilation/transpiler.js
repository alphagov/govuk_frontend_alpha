'use strict'

const through = require('through2')
const metaTemplate = require('meta-template')
const components = require('../components')

const assetPathPattern = /\{\{ asset_path \+ '(.*?)' \}\}/
const textForPattern = /\{\{ (.*?)\|default\('(.*?)'\) \}\}/
const blockForPattern = /\{% block (.*?) %\}(.*?)\{% endblock %\}/

const transpilationPattern = new RegExp([assetPathPattern.source, textForPattern.source, blockForPattern.source].join('|'), 'g')

const transpileTemplate = (target, assetVersion) => {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file)
    const targetTranspiler = require(`./${target}_transpiler.js`)
    let template = file.contents.toString(encoding)
    template = template.replace(transpilationPattern, function (match) {
      let replacement
      if (arguments[1] !== undefined) {
        // asset_path pattern
        replacement = targetTranspiler.assetPath !== undefined
          ? targetTranspiler.assetPath(arguments[1], assetVersion)
          : match
      } else if (arguments[2] !== undefined) {
        // text_for pattern
        replacement = targetTranspiler.textFor !== undefined
          ? targetTranspiler.textFor(arguments[2], arguments[3])
          : match
      } else if (arguments[4] !== undefined) {
        // block_for pattern
        replacement = targetTranspiler.blockFor !== undefined
          ? targetTranspiler.blockFor(arguments[4], arguments[5])
          : match
      }
      return replacement
    })

    file.contents = new Buffer(template)

    callback(null, file)
  })
}

const transpileComponent = (target) => {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file)

    const name = file.path.split('/').pop().split('.')[0]
    file.contents = new Buffer(transpileComponentSync(target, name, file.contents.toString('utf8')))

    callback(null, file)
  })
}

const transpileComponentSync = (target, componentName, componentTemplate) => {
  // Meta template conversion
  const node = metaTemplate.parse.string(componentTemplate)
  const formatter = metaTemplate.format.get(target)
  let transpiledTemplate = formatter(node)

  // Argument wrapping
  const args = components.get(componentName).arguments || []
  const targetTranspiler = require(`./${target}_transpiler.js`)

  if (targetTranspiler.componentArgs) {
    transpiledTemplate = targetTranspiler.componentArgs(transpiledTemplate, componentName, args)
  }

  return transpiledTemplate
}

const extensionForTarget = target => {
  const targetTranspiler = require(`./${target}_transpiler.js`)
  return targetTranspiler.fileExt || target
}

module.exports.transpileTemplate = transpileTemplate
module.exports.transpileComponent = transpileComponent
module.exports.transpileComponentSync = transpileComponentSync
module.exports.extensionForTarget = extensionForTarget
