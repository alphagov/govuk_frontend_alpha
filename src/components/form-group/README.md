# Use this component

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **formGroup** like a normal function, set values for arguments `'id', 'name', 'label', 'hint', 'error', 'isTextarea', 'value'` to alter its content.

### Form group - label and text input

```nunjucks
{% raw %}
{{ govuk_components.formGroup(
  id="nino",
  name="nino",
  label="What is your National Insurance number",
  hint="It'll be on your last payslip. For example, VO 12 34 56 D."
) }}
{% endraw %}
```

### Form group - label and text input (with error message)

```nunjucks
{% raw %}
{{ govuk_components.formGroup(
  id="nino",
  name="nino",
  label="What is your National Insurance number",
  hint="It'll be on your last payslip. For example, VO 12 34 56 D.",
  error="Error message about National Insurance number goes here"
) }}
{% endraw %}
```

### Form group - label and textarea

```nunjucks
{% raw %}
{{ govuk_components.formGroup(
  id="textarea",
  name="textarea",
  label="This isthe label text",
  isTextarea="true"
) }}
{% endraw %}
```
