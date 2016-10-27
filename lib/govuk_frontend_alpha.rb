require 'json'

module GovukFrontendAlpha
  # read package details from NPM package.json and config files
  @package_json = JSON.parse File.read('package.json')
  Dir.chdir('config') do
    @paths_json = JSON.parse File.read('paths.json')
  end

  NAME = @package_json['name']
  VERSION = @package_json['version']
  DESCRIPTION = @package_json['description']
  AUTHOR = @package_json['author']
  LICENSE = @package_json['license']
  HOMEPAGE = @package_json['homepage']

  FILES = Dir[@paths_json['gem'] + '**/*']
end
