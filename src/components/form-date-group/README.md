# Use this component

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **formDateGroup** like a normal function, set values for arguments `'id', 'name', 'label', 'hint', 'error', 'isTextarea', 'value'` to alter its content.

### Form date group

```nunjucks
{% raw %}
{{ govuk_components.formDateGroup(
  id="dob",
  name="dob",
  legend="What is your date of birth?",
  hint="",
  error="",
  day="",
  month="",
  year=""
) }}
{% endraw %}
```

### Form date group (with error message)

```nunjucks
{% raw %}
{{ govuk_components.formDateGroup(
  id="dob",
  name="dob",
  legend="What is your date of birth?",
  hint="This is the hint text",
  error="This is the error text",
  day="",
  month="",
  year=""
) }}
{% endraw %}
```
