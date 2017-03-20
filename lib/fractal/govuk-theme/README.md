# GOV.UK Fractal Theme

A [Fractal sub-theme](http://fractal.build/guide/customisation/web-themes#subclassing-themes), extending [Mandelbrot](https://github.com/frctl/mandelbrot), the default Fractal Theme, and using the styles from [GDS Tech Doc](https://github.com/alphagov/tech-docs-template) styles.

The UI has changed significantly during the Alpha and many parts of Mandelbrot have been customised or overridden:

- [Templates](views/)
- [Styles](assets/scss/_theme-overrides.scss)
- [Routes](index.js) (See use of `addRoute`)
- [Template helpers](index.js) (See use of `addFilter`)

Changes were driven by user research and have been iterated pretty quickly - not with maintainability in mind.

The most significant change is removing the accordion navigation for component variants and adding a route to display an overview of a component, which then links to the variants.

The [browser view](https://github.com/alphagov/govuk_frontend_alpha/blob/master/lib/fractal/govuk-theme/views/partials/browser/controls.nunj) has also been customised, and new tabs added, along with filters to format data in the way we want.

At this point the GOV.UK theme has diverged significantly Mandelbrot, overriding much of its core code. Because of this, if Fractal is used beyond the Alpha it might make sense to build a fractal theme from scratch - instead of extending Mandelbrot.

The best way to see what changes have been made to the Mandelbrot templates would be to copy the original Mandelbrot templates into the theme `view` dir and check the diff.
