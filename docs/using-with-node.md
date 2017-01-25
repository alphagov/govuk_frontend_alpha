# Using with Node

*Note: These instructions describe setting up the alpha version of govuk_frontend and can/will change*

## Add to package.json

From this repo, build a local version of the npm package:

```bash
gulp package
```

This will create a tgz file in `dist/npm/`

Copy the govuk_frontend_alpha-0.0.1.tgz file to the root of your project.

Amend your package.json file to include govuk_frontend_alpha as a dependency.

```bash
"dependencies": {
 "govuk_frontend_alpha": "file:govuk_frontend_alpha-0.0.1.tgz"
 }
```

Install the govuk_frontend_alpha package

If you're using [Yarn](https://yarnpkg.com/) to manage packages, you can install the govuk_frontend_alpha dependency with:

```bash
yarn install
```

Instructions for [installing Yarn are here](https://yarnpkg.com/en/docs/install).

or if you're using [NPM](https://www.npmjs.com/) to manage pagckages:

```bash
npm install
```

Note: In future the package will be published to npm and the steps above can be replaced with

```bash
yarn add govuk-frontend-alpha
```

or

```bash
npm install govuk-frontend-alpha --save
```
Instructions for [migrating from NPM to Yarn are here](https://yarnpkg.com/en/docs/migrating-from-npm).

## Use the layout

Create a layout template (usually `app/views/layout.nunjucks`)

These instructions assume use of the Nunjucks templating language.

Add this line to the layout.njk file, to use the govuk_frontend_alpha's layout template

```nunjucks
{% extends "govuk_template.njk" %}
```

## Importing SASS

In your main stylesheet `main.scss`, add this to the start:

```scss
@import '../../../node_modules/govuk_frontend_alpha/';
```

Or configure includePaths to include node_modules and use:

```scss
@import 'govuk_frontend_alpha/';
```

You will then need to include your main stylesheet in the `head` content block - see below.

## Customise the template

`govuk_template` provides blocks you can insert content into, to customise the basic layout.

For example, to set a `<title>` for your page you can override the `page_title` block, and it will be inserted into the `govuk_template` layout.:

```nunjucks
{% block page_title %}
  My project title
{% endblock %}
```

Or to add content to `<head>`, for stylesheets or similar:

```nujucks
{% block head %}
  <link href="/public/css/main.css" media="screen" rel="stylesheet" type="text/css">
{% endblock %}
```

Check out the [full list of blocks](template-blocks.md) you can use to customise the template.
