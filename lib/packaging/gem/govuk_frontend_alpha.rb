require 'json'

module GovukFrontendAlpha
  # read package details from NPM package.json and config files
  @package_json = JSON.parse File.read(File.expand_path("../../../../package.json", __FILE__))
  @paths_json = JSON.parse File.read(File.expand_path("../../../../config/paths.json", __FILE__))

  NAME = @package_json['name']
  VERSION = @package_json['version']
  DESCRIPTION = @package_json['description']
  AUTHOR = @package_json['author']
  LICENSE = @package_json['license']
  HOMEPAGE = @package_json['homepage']
  FILES = Dir['**/*']
end
