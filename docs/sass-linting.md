# Sass linting

We are using gulp-sass-lint.

## About Sass lint

The configuration for the sass-linter can be found in /config/.sass-lint.yml

The original file was created using gouvk-lint's scss-lint.yml file as a base,
this file has the following amended linting rules.

[Disabling linters within the sass files is currently not supported](https://github.com/brigade/scss-lint#disabling-linters-via-source).
There is a [PR to add this to sass-lint](https://github.com/sasstools/sass-lint/pull/677).

Here's the [default scss lint file as reference](https://github.com/brigade/scss-lint/blob/master/config/default.yml).

As the govuk-lint file is a SCSS-Lint file, it has been converted to the equivalent Sass Lint config by [sasstools.github.io/make-sass-lint-config](sasstools.github.io/make-sass-lint-config).

## Sass linting rules

Property order: smacss
Don't require rules to be ordered alphabetically
https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/smacss.txt

Quotes
Don't require single quotes
