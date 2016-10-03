# Templates

This package has templates that you can directly include into your service. These will give you an appropriate header and footer, and a space in the middle for your content.

## Overview

The standard templates live in `app/templates` and are written in [Nunjucks](https://mozilla.github.io/nunjucks/). From these we automatically build the same set of templates in a variety of different templating languages.

The default template is branded as GOV.UK, but we also have an unbranded version suitable for use in projects outside of central government in the UK. If you are not going to be hosting your application on www.gov.uk, *.blog.gov.uk or *.service.gov.uk then you *must not* use the branded template.

## How to use

If you have started your project with one of our starter kits you’ll already have the main template hooked up and ready to go.

If you’re adding govuk_frontend yourself then you’ll need to manually include a link to the template. This is done in different ways depending on the framework you’re using.

### Express

To be added.

### Ruby on Rails

Include this line at the bottom of `app/views/layouts/application.erb`:

```erb
<%= render file: 'layouts/govuk_template' %>
```

### Django

To be added.

## Amending the template

Once you’ve identified which part you’d like to add to or change then make that amend and run the tests. If they pass then create a commit and open a new pull request, explaining the change you’re making and the reasoning behind it.

## Adding a new templating language

All the other template languages we produce are transpiled from our standard Nunjucks templates. To transpile to a different templating language you need to know three things about it:

1. How does it define a block where content can be inserted, and how do you define default content for this?
2. How does it define a place where text can be inserted, and how do you define default text for this? In many languages this is the same syntax as above.
3. How does including assets work?

Once you know these you can add a new file to `lib/transpilation`. This file should have three functions that define what each of the insertion points in the list above look like in the language to want to transpile to: `asset_path`, `block_for` and `text_for`. In many templating languages (for example Handlebars) the expected `text_for` output is the same as the expected `block_for` syntax; in this case one can just forward to the other.

Once you’ve built and exposed these functions (using ES6 template strings to insert the provided values) and added tests to `test/specs/transpiler_spec.js` then it can be added as a task to `gulpfile.js` and a pull request opened.
