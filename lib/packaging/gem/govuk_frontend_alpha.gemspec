require 'json'

# `package.json` is created as part of the `gem:prepare` step
@package_json = JSON.parse File.read(File.expand_path("../config/package.json", __FILE__))

Gem::Specification.new do |s|
  s.name        = @package_json['name']
  s.version     = @package_json['version']
  s.summary     = @package_json['description']
  s.author      = @package_json['author']
  s.homepage    = @package_json['homepage']
  s.license     = @package_json['license']
  s.files = Dir["{app,config,lib}/**/*"]

  s.add_dependency "rails", ">= 3.1"
end
