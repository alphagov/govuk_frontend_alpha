*Note: These instructions describe setting up the alpha version of govuk_frontend and can/will change*

## Quick start

**1.** Add govuk_frontend_alpha as a dependency

```bash
npm install govuk_frontend_alpha --save
```

> ❗️__Alpha Note:__ *`govuk_frontend_alpha` isn't available on the NPM registry. You'll need to install it manually (see below).*

Add this line to your dependencies in `package.json`:

```bash
  "govuk_frontend_alpha": "https://github.com/alphagov/govuk_frontend_alpha/releases/download/0.0.1-alpha/govuk_frontend_alpha-0.0.1-npm.tgz"
```

Install the govuk_frontend_alpha package:

```bash
npm install
```

**2.** Extend the GOV.UK layout by updating your application layout:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}{% endraw %}
```
You can find the GOV.UK layout in

```bash
node_modules/govuk_frontend_alpha/templates/
```

**3.** Start your application, you should see the familiar GOV.UK brand.

## Setting up GOV.UK Frontend

> To customise the GOV.UK layout, add your own stylesheet and use components - follow the instructions below.

## Add govuk_frontend_alpha as a dependency

Follow the [quick start](/docs/using-with-node#quick-start) instructions above.

## Using the GOV.UK layout

If you haven't done so already, create a file in your application's views directory.

```
views/index.njk
```

In your `views/index.njk` file:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}{% endraw %}
```

You may need to configure your application's views to find this layout template.

```javascript
// Set the location of the component and template files
var appViews = [
  path.join(__dirname, 'views'),
  path.join(__dirname, '/node_modules/govuk_frontend_alpha/templates/'),
  path.join(__dirname, '/node_modules/govuk_frontend_alpha/components/')
]

// Tell nunjucks we are using express to serve the templates within
// the views defined in appViews
nunjucks.configure(appViews, { express: app })
```

## Customise the layout

GOV.UK Frontend has [template blocks](/docs/template-blocks) that you can use to override bits of the layout.

### The 'content' block

```nunjucks
{% raw %}{% block content %}
  Hello world!
{% endblock %}{% endraw %}
```

### The 'page_title' block

```nunjucks
{% raw %}{% block page_title %}
  My page title
{% endblock %}{% endraw %}
```

## Adding your own stylesheet

The quickest way to add your own stylesheet is to add a new stylesheet to the `head` block.

### The 'head' block

```nunjucks
{% raw %}{% block head %}
  <link href="{{ asset_path }}stylesheets/application.css" media="screen" rel="stylesheet" />
{% endblock %}{% endraw %}
```

If you would prefer to compile the govuk-frontend scss files and avoid an extra http request -
you can override the default stylesheet by using a `stylesheet` block.

### The 'stylesheet' block

To set a `stylesheet` block, in `index.njk` add:

```nunjucks
{% raw %}{% block stylesheet %}
  <link href="{{ asset_path }}stylesheets/application.css" media="screen" rel="stylesheet" />
{% endblock %}{% endraw %}
```

> ❗️__The stylesheet block replaces the default stylesheet.__

> Until you import the govuk_frontend_alpha scss files in your application stylesheet, your application styling will be broken.

* To _import all_ of the scss files, add this line to your application.scss file:

```scss
@import '../../node_modules/govuk_frontend_alpha/assets/scss/govuk-frontend';
```

* To _import some_ of the scss files,
choose files to add to your application.scss file from:

```bash
node_modules/govuk_frontend_alpha/assets/scss/govuk-frontend/
```

* To test compiling these scss files has worked, change the colour of the body element.

```
body {
  background: pink;
}
```

* Restart the app to see your changes
* You should see the GOV.UK brand, Hello World! and a pink background.

### Configuring includePaths (optional)

If you'd prefer to configure includePaths to include the path to the govuk_frontend_alpha package, instead use:

```scss
@import 'govuk-frontend';
```

If you haven't defined includePaths, you may well see an error:

```
Parent style sheet: /assets/scss/application.scss
        on line 4 of assets/scss/application.scss
>> @import 'govuk-frontend';
```

Fix this by configuring includePaths for gulp-sass, in your gulpfile.js:

```
.pipe(sass({
  includePaths: ['node_modules/govuk_frontend_alpha/assets/scss/']
})
```

## Before using a component

In your index template, add this line underneath `{% raw %}{% extends "govuk_template.njk" %}{% endraw %}` to import all components:

```nunjucks
{% raw %}{% import "components.njk" as govuk %}{% endraw %}
```

Your index template, `views/index.njk` should now look like this:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}
{% import "components.njk" as govuk %}{% endraw %}
```

## Use a component in your application

[You can find all the components here](http://govuk-frontend-alpha.herokuapp.com/).

Copy the Nunjucks macro to implement a component.

Here is an example of a macro for a button component:

```nunjucks
{% raw %}{{ govuk.button(text="Change this button text") }}{% endraw %}
```

Copy and paste this macro into your index template and change the button text.

```nunjucks
{% raw %}{{ govuk.button(text="Save and continue") }}{% endraw %}
```

Go to `http://localhost:3000`

This will render the Button component with the text 'Save and continue'
