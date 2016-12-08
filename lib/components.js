const glob = require('glob')
const path = require('path')
const paths = require('../config/paths')

let configPattern = '/*/*.config.js'
let components = {}

glob.sync(path.join(paths.appComponents, configPattern)).forEach(file => {
  // Parent path might change, so split on first part of file name
  let name = path.basename(file).split('.')[0]
  components[name] = require(path.relative(__dirname, file))
})

module.exports.all = components
module.exports.get = name => components[name]
module.exports.templatePathFor = name => path.join(paths.appComponents, name, `${name}.nunj`)
