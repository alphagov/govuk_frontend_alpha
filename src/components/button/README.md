# Use this component

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **button** like a normal function, set values for arguments `'text', 'type', 'isPrimary'` to alter its content.

### Button

```nunjucks
{% raw %}
  {{ govuk_components.button("Button text") }}
{% endraw %}
```


### Primary button

```nunjucks
{% raw %}
  {{ govuk_components.button("Primary button text", isPrimary=true) }}
{% endraw %}
```
