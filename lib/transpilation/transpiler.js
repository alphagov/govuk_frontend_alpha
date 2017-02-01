'use strict'

const through = require('through2')
const metaTemplate = require('meta-template')
const components = require('../components')

const transpileTemplate = (target, assetVersion) => {
  const transpilationPatterns = [
    {
      name: 'assetPath',
      pattern: /\{\{ asset_path \+ '(.*?)' \}\}/g,
      replacer: (transpiler, asset) => transpiler.assetPath(asset, assetVersion)
    },
    {
      name: 'textFor',
      pattern: /\{\{ (.*?)\|default\('(.*?)'\) \}\}/g,
      replacer: (transpiler, key, defaultContent) => transpiler.textFor(key, defaultContent)
    },
    {
      name: 'blockFor',
      pattern: /\{% block (.*?) %\}(.*?)\{% endblock %\}/g,
      replacer: (transpiler, key, defaultContent) => transpiler.blockFor(key, defaultContent)
    }
  ]

  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file)
    const targetTranspiler = require(`./${target}_transpiler.js`)
    let template = file.contents.toString(encoding)

    for (let pattern of transpilationPatterns) {
      let transpileComponentCallback = (match, ...args) => {
        let replacement = match
        if (targetTranspiler[pattern.name] !== undefined) {
          replacement = pattern.replacer.call(null, targetTranspiler, ...args)
        }
        return replacement
      }
      let tmpTemplate
      while (template !== (tmpTemplate = template.replace(pattern.pattern, transpileComponentCallback))) {
        template = tmpTemplate
      }
    }

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
  let transpiledTemplate
  try {
    const node = metaTemplate.parse.string(componentTemplate)
    const formatter = metaTemplate.format.get(target)
    transpiledTemplate = formatter(node)
  } catch (e) {
    console.error(`Error converting to ${target}, for component: ${componentName}`)
    throw e
  }

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
