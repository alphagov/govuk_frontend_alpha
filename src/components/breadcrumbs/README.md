# Breadcrumbs

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}{% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **breadcrumbs** like a normal function, set values for arguments `'breadcrumbs'` to alter its content.

### Breadcrumbs

```nunjucks
{% raw %}{{ govuk_components.breadcrumbs(
  [
    { title: 'Home', url: '/' },
    { title: 'Section', '/section' }
  ]
) }}
{% endraw %}
```
