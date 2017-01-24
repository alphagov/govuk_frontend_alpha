# Using with Node


## Download the Node starter app

[Download the Node/Express starter app](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-node)


#### Add the govuk_frontend_alpha package as a dependency

The package is not available on the NPM registry.

You will need to manually include it as a dependency.

* Amend the package.json file in the root of the starter app

```bash
"dependencies": {
  "govuk_frontend_alpha": "https://github.com/alphagov/govuk_frontend_alpha/releases/download/0.0.1-alpha/govuk_frontend_alpha-0.0.1-npm.tgz",
 }
```

* Install the govuk_frontend_alpha package

If you're using [Yarn](https://yarnpkg.com/):

```bash
yarn
```

If you're using [NPM](https://www.npmjs.com/):

```bash
npm install
```


## Set up your application

The starter application uses the Nunjucks templating language.

The starter app has already set the view engine for the app to use Nunjucks:
`app.set('view engine', 'nunjucks')`
[TODO: link to config for starter app]

### Use the GOV.UK layout template

#### Amend the layout template to extend the GOV.UK layout

In `app/views`, amend the `layout.njk` template to extend the GOV.UK template.

Replace the text 'Layout template' at the top of the `layout.njk` file with:

```nunjucks
{% extends "govuk_template.njk" %}
```

The starter app has already set the path to the GOV.UK layout template in its config:

```nunjucks
var path = require('path')

var appViews = [
  path.join(__dirname, 'views'),
  path.join(__dirname, '/node_modules/govuk_frontend_alpha/templates/')
  ]

app.set('views', appViews)
```

Start your app using `node app.js`

Go to http://localhost:3000, you will see the GOV.UK template, with the text "Hello world!".


### GOV.UK template blocks - content

In `index.njk` there is a content block:

```nunjucks
{% block content %}
Hello world!
{% endblock %}
```

Use the content block to insert your content into the template.

Here is a [full list of blocks](template-blocks.md) you can use to customise the template.

<<<<<<< HEAD
```scss
@import '../../../node_modules/govuk_frontend_alpha/';
=======
### Import all the file of all components

In `index.njk`:

Add this line underneath `{% extends "layout.nunjucks" %}`

```nunjucks
{% import "components.njk" as govuk_components %}
>>>>>>> WIP - Update using with Node instructions
```

`views/index.nunjucks` should now look like this:

<<<<<<< HEAD
```scss
@import 'govuk_frontend_alpha/';
=======
```nunjucks
{% extends "layout.njk" %}
{% import "components.njk" as govuk_components %}
>>>>>>> WIP - Update using with Node instructions
```

### Add a component

For the application to find the path to components, the following path has been configured:

```nunjucks
var applicationViews = [
  '/app/views',
  '/node_modules/govuk_frontend_alpha/templates',
  '/node_modules/govuk_frontend_alpha/components',
  ]
app.set('views', applicationViews)
```
[TODO: link to config for starter app]


[You can see all the components here](TODO: link to Heroku)

* Copy the macro to implement a component

Include the macro for a button component:

```nunjucks
{{ govuk_components.button("Change this button text") }}
```

Change the button text:

```nunjucks
{{ govuk_components.button("Save and continue") }}
```

Go to http://localhost:3000, you should see a 'Save and continue' button in your application.


### Add a stylesheet to the layout template

```nujucks
{% extends "govuk_template.njk" %}

{% block head %}
  <link href="/public/css/main.css" media="screen" rel="stylesheet" type="text/css">
{% endblock %}
```

Check out the [full list of blocks](template-blocks.md) you can use to customise the template.


### Import the Sass files

In your main stylesheet `main.scss`, add this to the start:

```scss
@import '../../../node_modules/govuk_frontend_alpha/;
```

Or configure includePaths to include node_modules and use:
[TODO: Add example of this from starter app]

```scss
@import 'govuk_frontend_alpha/;
```
