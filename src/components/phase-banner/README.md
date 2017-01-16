# Phase Banner

## Nunjucks

[Import](https://mozilla.github.io/nunjucks/templating.html#import) the components template and bind all of its exported values to a variable so that we can use it:

```nunjucks
{% raw %}
  {% import "components.njk" as govuk_components %}
{% endraw %}
```

Call **phaseBanner** like a normal function, set values for arguments `'phase', 'message', 'messageHtml'` to alter its content.

### Phase banner

```nunjucks
{% raw %}
{{ govuk_components.phaseBanner(
  "Beta",
  message="This service is in Beta – your feedback will help us to improve it."
) }}
{% endraw %}
```


### Phase banner with HTML in the message

```nunjucks
{% raw %}
{{ govuk_components.phaseBanner(
  "Beta",
  messageHtml='This service is new – your <a href="#">feedback</a> will help us to improve it.'
) }}
{% endraw %}
```

## About this component

Copied from [GOV.UK Elements](http://govuk-elements.herokuapp.com/alpha-beta-banners/).

You have to use an alpha banner if your thing is in alpha, and a beta banner if it’s in beta.
