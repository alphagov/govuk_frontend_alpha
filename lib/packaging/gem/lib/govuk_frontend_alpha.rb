# Conventionally the engine lives in a separate file and imported here, i've
# combined them to reduce the number of files while we work on packaging.

module GovukFrontendAlpha
  class Engine < ::Rails::Engine
    initializer "govuk_frontend_alpha.assets.precompile" do |app|
      app.config.assets.precompile += %w(
        govuk-frontend*.css
        govuk-template*.css
        fonts*.css
        govuk-template.min.js
        toolkit.min.js
        components.min.js
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
end

# Monkey patch the `govuk` helper into all views, to avoid users having to
# manually load the engine helper in their own ApplicationHelper
# @TODO: Reconsider loading approach after Alpha. Could be explicit like:
#  `helper GovukFrontendAlpha::ComponentHelper`, or just cleaner magic
module ApplicationHelper
  def govuk
    # allows components to be called like this:
    # `govuk.button(text: 'Start now')`
    DynamicComponentRenderer.new(self)
  end

  class DynamicComponentRenderer
    def initialize(view_context)
      @view_context = view_context
    end

    def method_missing(method, *args, &block)
      @view_context.render(
        partial: "components/#{method.to_s}",
        locals: args.first.with_indifferent_access
      )
    end
  end
end
