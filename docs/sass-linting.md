# Sass linting

We are using [gulp-sass-lint](https://github.com/sasstools/gulp-sass-lint).

## About Sass lint

The configuration for the sass-linter can be found in [config/.sass-lint.yml](https://github.com/alphagov/govuk_frontend_alpha/blob/master/config/.sass-lint.yml).

This was converted from [govuk-lint’s gds-sass-styleguide.yml](https://github.com/alphagov/govuk-lint/blob/master/configs/scss_lint/gds-sass-styleguide.yml) using [make-sass-lint-config](sasstools.github.io/make-sass-lint-config). This was based on [scss-lint’s default rules](https://github.com/brigade/scss-lint/blob/master/config/default.yml).

## Sass linting rules

- Property order: [smacss](https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/smacss.txt). Don’t require rules to be ordered alphabetically.
- Quotes: don’t require single quotes
