lib = File.expand_path('../lib', __FILE__)
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
