'use strict'

const through = require('through2')

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

    // @TODO: Fix avoid sync file reads to get component config
    var fs = require('fs');
    var config = JSON.parse(fs.readFileSync(`./app/components/${name}/${name}.config.json`, 'utf8'));

    const args = config.arguments || []
    const targetTranspiler = require(`./${target}_transpiler.js`)

    if (targetTranspiler.componentArgs) {
      file.contents = new Buffer(targetTranspiler.componentArgs(file.contents, name, args))
    }

    callback(null, file)
  })
}

module.exports.transpileTemplate = transpileTemplate
module.exports.transpileComponent = transpileComponent
