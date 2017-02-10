## Quick start

**1.** Add it to your `Gemfile`:

```ruby
gem 'govuk_frontend_alpha'
```

> ❗️ __Alpha:__ `govuk_frontend_alpha` isn't on RubyGems yet.
>
> Using [govuk-frontend-alpha-starter-kit-rails](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-rails)? Run `./bin/install-govuk-frontend`

**2.** Extend the layout by updating your application layout, to look like this:

```erb
<% content_for :head do %>
  <%# Move your `<head>` includes here, like:
    - `stylesheet_link_tag`
    - `csrf_meta_tags`
    - `javascript_include_tag`
  %>
<% end %>

<% content_for :content do %>
  <%# Any content not inside a `content_for` block, in this layout, or in a view
      that uses this layout, will be `yield`ed here, inside the `content` block.
      See: http://guides.rubyonrails.org/layouts_and_rendering.html#understanding-yield %>

  <%= yield %>

<% end %>

<%= render file: 'layouts/govuk_template' %>
```

**3.** In your view template set a page title like this:

```erb
<% content_for :page_title, "My page title" %>

<h1>My page</h1>
```

**4.** Use the `govuk` helper to add a component to your page:

```erb
<%= govuk.button(text: 'Submit') %>
```

---

## Setting up GOV.UK Frontend

This is the slow start section. If you want more detail, or are having problems with the quick start.

### Installing

Add GOV.UK Frontend to your `Gemfile`:

```ruby
gem 'govuk_frontend_alpha'
```

> ❗️ __Alpha Note:__ *`govuk_frontend_alpha` isn't on RubyGems yet. You'll need to install it manually (instructions to be added)*
>
> *If you're using [govuk-frontend-alpha-starter-kit-rails](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-rails) then you can run `./bin/install-govuk-frontend` and follow the instructions.*

### Using the GOV.UK layout

Add this line to the **bottom** of your application layout view (usually found in `app/views/layouts/application.html.erb`):

```erb
<%= render file: 'layouts/govuk_template' %>
```

When you reload the application you should see the familiar GOV.UK brand, but you might notice your own styles aren't working, or you page `<title>` isn't being rendered.

### Customising the GOV.UK layout


The GOV.UK Frontend uses [content blocks](http://guides.rubyonrails.org/layouts_and_rendering.html#using-the-content-for-method) that you can override to customise the layout and add your own content.

At a minimum you'll need to set your own `page_title` and `head` content blocks, but there are [many other blocks](docs/template-block.md) you can use.

```erb
<% content_for :page_title, "My page title" %>

<% content_for :head do %>
  <%= stylesheet_link_tag 'application', media: 'all' %>
  <%= csrf_meta_tags %>
<% end %>

<%= render file: 'layouts/govuk_template' %>
```

Not familiar with content blocks in Rails? Take a look at the [Rails documentation on `content_for`](http://guides.rubyonrails.org/layouts_and_rendering.html#using-the-content-for-method) or try setting some content blocks in your app to see how it works.

### Setting page content
Any content in your layout (or views that extend it) **not inside a content block** will be yielded to the `content` block.

In this example, `<h1>Hello World</h1>` will be automatically placed in the content section of the GOV.UK layout.

```erb
<% content_for :page_title, "My page title" %>

<h1>Hello World</h1>

<%= render file: 'layouts/govuk_template' %>
```

## Styling the layout

By default the GOV.UK Frontend layout will load it's own  stylesheet, separate from your application.

### Having a single stylesheet

In your application's stylesheet (usually `application.scss`) you can import all of the GOV.UK Frontend styling.

```scss
// GOV.UK Frontend: All styling, layout, mixins, helpers and variables
@import 'govuk-frontend';

.my-app-css {
  // goes here
}
```

Next you need to customise the layout to not load it's own stylesheet, and instead load your application's instead.

```erb
<% content_for :head do %>
  <%# Move your own <link> tag to the :stylesheet block %>
  <%= csrf_meta_tags %>
<% end %>

<% content_for :stylesheet do %>
  <%# Overriding this block prevents GOV.UK Frontend loading it's own CSS %>
  <%= stylesheet_link_tag 'application', media: 'all' %>
<% end %>

<%= render file: 'layouts/govuk_template' %>
```

All the GOV.UK Frontend styling will be included by default, and all of it's SCSS mixins and variables will be imported too. So you can reference `$govuk-blue` in your SCSS without having to import it.

### Having separate stylesheets

If you want to use any of the GOV.UK Frontend SCSS mixins or variables you'll need to import them in to your application SCSS.

For example, to use the `$govuk-blue` variable you'll need to do this:

```SCSS
// GOV.UK Frontend colour variables
@import 'settings/colours';
```

## Using GOV.UK Components

GOV.UK Frontend provides a rails helper, that you can call like this:

```erb
<%= govuk.button(text: 'Start now') %>
```

This will render a Button component with the `text` of 'Start now'.
