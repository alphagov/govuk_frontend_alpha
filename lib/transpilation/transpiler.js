'use strict'

var through = require('through2')

const assetPathPattern = /\{\{ asset_path \+ '(.*?)' \}\}/
const textForPattern = /\{\{ (.*?) \}\}/
const blockForPattern = /\{\% block (.*?) \%\}(.*?)\{\% endblock \%\}/

const transpilationPattern = new RegExp([assetPathPattern.source, textForPattern.source, blockForPattern.source].join('|'), 'g')

var transpile = function (target) {
  // Creating a stream through which each file will pass
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file)
    }

    var targetTranspiler = require(`./${target}_transpiler.js`)

    let template = file.contents.toString()

    template = template.replace(transpilationPattern, function (match) {
      let replacement
      if (arguments[1] !== undefined) {
        // asset_path pattern
        replacement = targetTranspiler.asset_path(arguments[1])
      } else if (arguments[2] !== undefined) {
        // text_for pattern
        let block = arguments[2].split('|')
        let key = block[0]
        let value = block[1]
        replacement = targetTranspiler.text_for(key, value)
      } else if (arguments[3] !== undefined) {
        // block_for pattern
        replacement = targetTranspiler.block_for(arguments[3], arguments[4])
      }
      return replacement
    })

    file.contents = new Buffer(template)

    cb(null, file)
  })
}

module.exports = transpile
