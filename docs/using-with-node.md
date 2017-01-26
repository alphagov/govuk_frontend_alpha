# Using with Node

## 1. Download the Node starter app

[Download the Node/Express starter app](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-node)


## 2. Add the govuk_frontend_alpha package as a dependency

The package is not available on the NPM registry.

You will need to manually include it as a dependency.

### Amend the package.json file in the root of your application

```bash
"dependencies": {
  "govuk_frontend_alpha": "https://github.com/alphagov/govuk_frontend_alpha/releases/download/0.0.1-alpha/govuk_frontend_alpha-0.0.1-npm.tgz",
 }
```

### Install the govuk_frontend_alpha package

If you're using [Yarn](https://yarnpkg.com/):

```bash
yarn
```

If you're using [NPM](https://www.npmjs.com/):

```bash
npm install
```


## 3. Set up your application

These instructions assume you will be using the Nunjucks templating language.

Refer to the [starter application commit history if you would like to know how it has been set up](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-node/commits/master).

### Get the GOV.UK layout

In `node_modules/govuk_frontend_alpha/templates` there is a `govuk_template.njk` layout file.

#### Extend the GOV.UK layout template

Create a file `layout.njk` in `views`, use this file to extend the GOV.UK template.

Insert into `layout.njk`:

```nunjucks
{% extends "govuk_template.njk" %}
```

If you are using the starter application, the `layout.njk` file has already been created for you.

Replace the text **'Layout template'** at the top of the `layout.njk` file with:

```nunjucks
{% extends "govuk_template.njk" %}
```

Start your app using `node app.js`

Go to http://localhost:3000, you will see the GOV.UK template, with the text "Hello world!".


### Adding content to a GOV.UK layout template block

The starter app provides a template block 'content', in `index.njk` as an example of how to use template blocks.

```nunjucks
{% block content %}
  Hello world!
{% endblock %}
```

Use the content block to insert your content into the template.

Here is a [full list of blocks](template-blocks.md) you can use to customise the template.

### Component setup

#### Import all components into your application

In your index template, add this line underneath `{% extends "layout.njk" %}`

```nunjucks
{% import "components.njk" as govuk_components %}
```

Your index template, `views/index.njk` should now look like this:

```nunjucks
{% extends "layout.njk" %}
{% import "components.njk" as govuk_components %}
```

### Use a component in your application

[You can find all the components here](http://govuk-frontend-alpha.herokuapp.com/).

Copy the Nunjucks macro to implement a component.

Here is an example of a macro for a button component:

```nunjucks
{{ govuk_components.button(text="Change this button text") }}
```

Copy and paste this macro into your index template and change the button text.

```nunjucks
{{ govuk_components.button(text="Save and continue") }}
```

Go to http://localhost:3000, you should see a 'Save and continue' button in your application.
