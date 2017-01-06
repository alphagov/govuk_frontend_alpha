# Conventionally the engine lives in a separate file and imported here, i've
# combined them to reduce the number of files while we work on packaging.

module GovukFrontendAlpha
  class Engine < ::Rails::Engine
    initializer "govuk_frontend_alpha.assets.precompile" do |app|
      app.config.assets.precompile += %w(
        govuk-frontend*.css
        govuk-template*.css
        fonts*.css
        govuk-template.js
        ie-shim.js
        template/favicon.ico
        template/apple-touch-icon-120x120.png
        template/apple-touch-icon-152x152.png
        template/apple-touch-icon-60x60.png
        template/apple-touch-icon-76x76.png
        template/opengraph-image.png
        template/gov.uk_logotype_crown_invert.png
        template/gov.uk_logotype_crown_invert_trans.png
        template/gov.uk_logotype_crown.svg
        template/opengraph-image.png
      )
    end
  end

  module ApplicationHelper
    def govuk_component(name, props)
      render partial: "components/#{name}", locals: props
    end
  end
end
