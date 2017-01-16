# Notice

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "notice.njk" as govuk_components %}
{% endraw %}
```

Call **notice** like a normal function, set values for arguments `'summary', 'text'` to alter its content.

### Details

```nunjucks
{% raw %}
{{ govuk_components.notice(
  iconDescription="Warning",
  text="Legal text goes in here"
) }}
{% endraw %}
```
