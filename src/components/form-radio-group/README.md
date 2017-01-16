# Use this component

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **formRadioGroup** like a normal function, set values for arguments `'id', 'name', 'legend', 'hint', 'error', 'radioGroup'` to alter its content.

### Radio button group

```nunjucks
{% raw %}
{{ govuk_components.formRadioGroup(
  id="contact-1a",
  name="contact-group",
  legend="How do you want to be contacted?",
  hint="Hint text in here",
  error="",
  radioGroup=[
    {
      id: 'example-contact-by-email-1a',
      value: 'contact-by-email',
      label: 'Email'
    },
    {
      id: 'example-contact-by-phone-2a',
      value: 'contact-by-phone',
      label: 'Text'
    },
    {
      id: 'example-contact-by-text-3a',
      value: 'contact-by-text',
      label: 'Phone'
    }]
) }}
{% endraw %}
```

### Radio button group (with error message)

```nunjucks
{% raw %}
{{ govuk_components.formRadioGroup(
  id="contact-1b",
  name="contact-group",
  legend="How do you want to be contacted?",
  hint="Hint text in here",
  error="Error text in here",
  radioGroup=[
    {
      id: 'example-contact-by-email-1b',
      value: 'contact-by-email',
      label: 'Email'
    },
    {
      id: 'example-contact-by-phone-2b',
      value: 'contact-by-phone',
      label: 'Text'
    },
    {
      id: 'example-contact-by-text-3b',
      value: 'contact-by-text',
      label: 'Phone'
    }]
) }}
{% endraw %}
```
