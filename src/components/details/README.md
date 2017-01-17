# Details

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **details** like a normal function, set values for arguments `'summary', 'text'` to alter its content.

### Details

```nunjucks
{% raw %}
{{ govuk_components.details(
  summary="Summary text goes in here",
  details="Details text goes in here"
) }}
{% endraw %}
```

```nunjucks
{% raw %}
{{ govuk_components.details(
  summary="Summary text goes in here",
  detailsHtml="<p>We need to know your nationality so we can work out which elections you’re entitled to vote in.</p> <a href="#">I can’t provide my nationality</a>"
) }}
{% endraw %}
```
