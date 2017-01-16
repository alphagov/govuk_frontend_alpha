# Use this component

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **formCheckboxGroup** like a normal function, set values for arguments `'id', 'name', 'legend', 'hint', 'error', 'checkboxGroup'` to alter its content.

### Checkbox component

```nunjucks

{% raw %}
  {{ govuk_components.formCheckboxGroup(
    id="contact-c",
    name="contact-group",
    legend="How do you want to be contacted?",
    hint="Hint text in here",
    error="",
    checkboxGroup=[
      {
        id: 'example-contact-by-email-1c',
        value: 'contact-by-email',
        label: 'Email'
      },
      {
        id: 'example-contact-by-phone-2c',
        value: 'contact-by-phone',
        label: 'Text'
      },
      {
        id: 'example-contact-by-text-3c',
        value: 'contact-by-text',
        label: 'Phone'
      }]
  ) }}
{% endraw %}
```


### Checkbox component (with error message)

```nunjucks
{% raw %}
{{ govuk_components.formCheckboxGroup(
  id="contact-d",
  name="contact-group",
  legend="How do you want to be contacted?",
  hint="Hint text in here",
  error="Error text in here",
  checkboxGroup=[
    {
      id: 'example-contact-by-email-1d',
      value: 'contact-by-email',
      label: 'Email'
    },
    {
      id: 'example-contact-by-phone-2d',
      value: 'contact-by-phone',
      label: 'Text'
    },
    {
      id: 'example-contact-by-text-3d',
      value: 'contact-by-text',
      label: 'Phone'
    }]
) }}
{% endraw %}
```
