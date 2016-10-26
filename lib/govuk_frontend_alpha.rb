require 'json'

module GovukFrontendAlpha
  # read package details from NPM package.json
  packageJson = JSON.parse File.read('package.json')
  NAME = packageJson['name']
  VERSION = packageJson['version']
  DESCRIPTION = packageJson['description']
  AUTHOR = packageJson['author']
  LICENSE = packageJson['license']
  HOMEPAGE = packageJson['homepage']
end
