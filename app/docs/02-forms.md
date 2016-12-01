---
title: GOV.UK Frontend Alpha components
context: 
  pageTitle: Form elements
---

{{ _self.pageTitle }}

Keep forms as simple as possible – only ask what's needed to run your service.

## Buttons

Use buttons to move though a transaction, aim to use only one button per page.

### Button text

Button text should be short and describe the action the button performs.

This is the button component:

{% render "@button" %}

The button component HTML:
```
{% render "@button" %}
```

## Form fields

### Optional and mandatory fields
- only ask for the information you absolutely need
- if you do ask for optional information, mark the labels of optional fields with '(optional)'
- don't mark mandatory fields with asterisks

### Form labels

- all form fields should be given labels
- don't hide labels, unless the surrounding context makes them unnecessary
- labels should be aligned above their fields
- label text should be short, direct and in sentence case
- avoid colons at the end of labels
- labels should be associated with form fields using the for attribute


This is the form group component:
{% render "@form-group" %}

The form group component HTML:
```
{% render "@form-group" %}
```
