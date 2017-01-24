# Breadcrumbs

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}{% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **breadcrumbs** like a normal function, set values for object keys `'title', 'url'` to alter its content.

### Breadcrumbs

### Default

```nunjucks
{% raw %}{{ govuk_components.breadcrumbs(
  [
    { title: 'Home', url: '/' },
    { title: 'Section', url:'/section' }
  ]
) }}
{% endraw %}
```

### Single section

```nunjucks
{% raw %}{{ govuk_components.breadcrumbs(
  [
    { title: 'Home', url: '/' }
  ]
) }}
{% endraw %}
```

### Multiple sections

```nunjucks
{% raw %}{{ govuk_components.breadcrumbs(
  [
    { title: 'Home', url: '/' },
    { title: 'Section', url:'/section' },
    { title: 'Sub-Section', url:'/section' },
    { title: 'Sub-Sub-Section', url:'/section' }
  ]
) }}
{% endraw %}
```

### Last breadcrumb is current page

```nunjucks
{% raw %}{{ govuk_components.breadcrumbs(
  [
    { title: 'Home', url: '/' },
    { title: 'Section'}
  ]
) }}
{% endraw %}
```
