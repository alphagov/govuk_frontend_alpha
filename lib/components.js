const glob = require('glob')
const path = require('path')
const paths = require('../config/paths')

let configPattern = '/*/*.config.js'
let components = {}

glob.sync(path.join(paths.srcComponents, configPattern)).forEach(file => {
  // Parent path might change, so split on first part of file name
  let name = path.basename(file).split('.')[0]
  components[name] = require(path.relative(__dirname, file))
})

const get = name => components[name]

const getVariantsFor = name => {
  const component = get(name)
  let variants = []
  if (component.context) {
    variants.push({
      name: name,
      context: component.context
    })
  }
  if (component.variants) {
    variants = variants.concat(component.variants)
  }
  return variants
}

module.exports.all = components
module.exports.get = get
module.exports.templatePathFor = name => path.join(paths.srcComponents, name, `${name}.nunj`)
module.exports.getVariantsFor = getVariantsFor
