# Link back

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **linkBack** like a normal function, set values for arguments `'link', 'text'` to alter its content.

### Link back

```nunjucks
{% raw %}
{{ govuk_components.linkBack(
  link="/",
  text="Back"
) }}
{% endraw %}
```
