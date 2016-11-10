# Contribution guidelines

During the alpha period we’re not looking for contributions.

We will provide details when we enter beta on how to contribute back to the project.

## Raising an issue

This project uses GitHub Issues to track problems. Feel free to [raise a new issue](https://github.com/alphagov/govuk_frontend_alpha/issues/new) if you’re having a specific problem.

## Amending an existing component

## Adding a new component

## Amending the template

## Adding a new templating language

We supply templates in different languages. If you use a language that we don’t currently supply [it’s not too difficult to add it](/docs/templates).

## Code standards

In general:
- two spaces
- no tabs
- no trailing whitespace
- empty line at the end of the file.

If your editor supports it you can use the [`.editorconfig`](https://github.com/alphagov/govuk_frontend_alpha/blob/master/.editorconfig) file in this repo to make sure these standards are followed.

Your JavaScript should follow the [standard JS](http://standardjs.com/) guidelines. [SASS is linted using sass-lint](https://github.com/alphagov/govuk_frontend_alpha/blob/master/docs/sass-linting.md).

You can lint the codebase with `gulp lint`.

### Versioning

Follow the guidelines on [semver.org](http://semver.org/) for assigning version numbers.

Versions should only be changed in a commit of their own, in a pull request of their own. This alerts team members to the new version and allows for last-minute scrutiny before the new version is released. Also, by raising a separate pull request, we avoid version number conflicts between feature branches.

### Commit hygiene

Please see our [git style guide](https://github.com/alphagov/styleguides/blob/master/git.md) which describes how we prefer git history and commit messages to read.

## Design

There is a Hackpad for [Design Patterns for GOV.UK services](https://designpatterns.hackpad.com/).
