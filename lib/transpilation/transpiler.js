'use strict'

var through = require('through2')

var transpile = function (target) {
  // Creating a stream through which each file will pass
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file)
    }

    var targetTranspiler = require(`./${target}_transpiler.js`)

    let template = file.contents.toString()

    // asset_path functions
    template = template.replace(/\{\{ asset_path \+ \'(.*?)\' \}\}/g, function (match) {
      return targetTranspiler.asset_path(arguments[1])
    })

    // text_for functions
    template = template.replace(/\{\{ (.*?) \}\}/g, function (match) {
      let block = arguments[1].split('|')
      let key = block[0]
      let value = block[1]
      return targetTranspiler.text_for(key, value)
    })

    // block_for functions
    template = template.replace(/\{\% block (.*?) \%\}(.*?)\{\% endblock \%\}/g, function (match) {
      return targetTranspiler.block_for(arguments[1], arguments[2])
    })

    file.contents = new Buffer(template)

    cb(null, file)
  })
}

module.exports = transpile
