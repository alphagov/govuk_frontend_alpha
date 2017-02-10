*Note: These instructions describe setting up the alpha version of govuk_frontend and can/will change*

- [Quick start](#quick-start)
- [Setting up GOV.UK Frontend](#setting-up-govuk-frontend)
  * [Installing](#installing)
- [Add govuk_frontend_alpha as a dependency](#add-govuk_frontend_alpha-as-a-dependency)
  * [Using the GOV.UK Frontend layout](#using-the-govuk-frontend-layout)
  * [Customising the GOV.UK Frontend layout](#customising-the-govuk-frontend-layout)
  * [Setting page content](#setting-page-content)
- [Styling the layout](#styling-the-layout)
  * [Having multiple stylesheets](#having-multiple-stylesheets)
  * [Having a single stylesheet](#having-a-single-stylesheet)
  * [Configuring includePaths (optional)](#configuring-includepaths-optional)
- [Before using GOV.UK Frontend components](#before-using-govuk-frontend-components)
- [Using GOV.UK Frontend components](#using-govuk-frontend-components)

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

**2.** Extend the GOV.UK Frontend layout by updating your application layout, to look like this:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}{% endraw %}
```
You can find the GOV.UK Frontend layout in

```bash
node_modules/govuk_frontend_alpha/templates/
```

**3.** Start your application, you should see the familiar GOV.UK brand.

## Setting up GOV.UK Frontend

### Installing

## Add govuk_frontend_alpha as a dependency

Follow the [quick start](/docs/using-with-node#quick-start) instructions above.

### Using the GOV.UK Frontend layout

Create a layout file in your application's views directory:

```
views/layout.njk
```

In your `views/layout.njk` file:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}{% endraw %}
```

You may need to configure your application's views to find the GOV.UK Frontend template.

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

### Customising the GOV.UK Frontend layout

GOV.UK Frontend has [template blocks](/docs/template-blocks) that you can use to override bits of the layout.

### Setting page content

Add a `content` block to your page:

```nunjucks
{% raw %}{% block content %}
  Hello world!
{% endblock %}{% endraw %}
```

Update the `page_title` block:

```nunjucks
{% raw %}{% block page_title %}
  My page title
{% endblock %}{% endraw %}
```

## Styling the layout

By default the GOV.UK Frontend layout will load its own stylesheet, separate from your application.

### Having multiple stylesheets

The quickest way to add your own styling is to add a new stylesheet to the `head` block.

```nunjucks
{% raw %}{% block head %}
  <link href="{{ asset_path }}stylesheets/application.css" media="screen" rel="stylesheet" />
{% endblock %}{% endraw %}
```

If you want to use any of the GOV.UK Frontend SCSS mixins or variables you'll need to import them in to your application SCSS.

For example, to use the `$govuk-blue` variable you'll need to do this:

```SCSS
// GOV.UK Frontend colour variables
@import '../../node_modules/govuk_frontend_alpha/assets/scss/settings/colours';
```

### Having a single stylesheet

> To use a single stylesheet, you will need to override the default `stylesheet` block.

To set a `stylesheet` block, in your application's layout file:

```nunjucks
{% raw %}{% block stylesheet %}
  <link href="{{ asset_path }}stylesheets/application.css" media="screen" rel="stylesheet" />
{% endblock %}{% endraw %}
```

> ❗️__The `stylesheet` block replaces the default stylesheet.__

> Until you import the govuk_frontend_alpha scss files in your application stylesheet, your application styling will be broken.

* To _import all_ of the scss files, add this line to your application.scss file:

```scss
@import '../../node_modules/govuk_frontend_alpha/assets/scss/govuk-frontend';
```

* To _import some_ of the scss files,
choose files to add to your application.scss file from:

```bash
node_modules/govuk_frontend_alpha/assets/scss/
```

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

## Before using GOV.UK Frontend components

In your index template, add this line underneath `{% raw %}{% extends "govuk_template.njk" %}{% endraw %}` to import all components:

```nunjucks
{% raw %}{% import "components.njk" as govuk %}{% endraw %}
```

Your index template, `views/index.njk` should now look like this:

```nunjucks
{% raw %}{% extends "govuk_template.njk" %}
{% import "components.njk" as govuk %}{% endraw %}
```

## Using GOV.UK Frontend components

[You can find all the GOV.UK Frontend components here](http://govuk-frontend-alpha.herokuapp.com/).

Here is an example of a button component:

```nunjucks
{% raw %}{{ govuk.button(text="Save and continue") }}{% endraw %}
```

This will render a Button component with the text 'Save and continue'
