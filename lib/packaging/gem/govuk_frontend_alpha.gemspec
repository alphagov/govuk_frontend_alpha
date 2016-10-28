# This gemspec is stored here but designed to be run during gem build
# Prior to that it’s copied into the build folder
# lib (below) refers to the expected folder rather than this one

lib = File.expand_path('../../../lib/packaging/gem', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'govuk_frontend_alpha'

Gem::Specification.new do |s|
  s.name        = GovukFrontendAlpha::NAME
  s.version     = GovukFrontendAlpha::VERSION
  s.summary     = GovukFrontendAlpha::DESCRIPTION
  s.author      = GovukFrontendAlpha::AUTHOR
  s.homepage    = GovukFrontendAlpha::HOMEPAGE
  s.license     = GovukFrontendAlpha::LICENSE
  s.files       = GovukFrontendAlpha::FILES
end
