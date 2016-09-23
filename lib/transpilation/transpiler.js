'use strict'

const through = require('through2')

const assetPathPattern = /\{\{ asset_path \+ '(.*?)' \}\}/
const textForPattern = /\{\{ (.*?)\|default\(\'(.*?)\'\) \}\}/
const blockForPattern = /\{\% block (.*?) \%\}(.*?)\{\% endblock \%\}/

const transpilationPattern = new RegExp([assetPathPattern.source, textForPattern.source, blockForPattern.source].join('|'), 'g')

const transpile = target => {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file)

    const targetTranspiler = require(`./${target}_transpiler.js`)
    let template = file.contents.toString(encoding)

    template = template.replace(transpilationPattern, function (match) {
      let replacement
      if (arguments[1] !== undefined) {
        // asset_path pattern
        replacement = targetTranspiler.asset_path(arguments[1])
      } else if (arguments[2] !== undefined) {
        // text_for pattern
        replacement = targetTranspiler.text_for(arguments[2], arguments[3])
      } else if (arguments[4] !== undefined) {
        // block_for pattern
        replacement = targetTranspiler.block_for(arguments[4], arguments[5])
      }
      return replacement
    })

    file.contents = new Buffer(template)

    callback(null, file)
  })
}

module.exports = transpile
