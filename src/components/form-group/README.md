## Form fields

* make field widths proportional to the input they take
* ensure that users can enter the information they need at smaller screen sizes
* snap form fields to 100% width at smaller screen sizes

{{ '@form-group'|preview(100) }}

### Labels

* all form fields should be given labels
* don’t hide labels, unless the surrounding context makes them unnecessary
* labels should be aligned above their fields
* label text should be short, direct and in sentence case
* avoid colons at the end of labels
* labels should be associated with form fields using the for attribute

### Optional and mandatory fields

* only ask for the information you absolutely need
* if you do ask for optional information, mark the labels of optional fields with ‘(optional)’
don’t mark mandatory fields with asterisks

### Hint text

* don’t use placeholder text in form fields, as this will disappear once content is entered into the form field
* use hint text for supporting contextual help, this will always be shown
* hint text should sit above a form field
* ensure hint text can be read correctly by screen readers

{{ '@form-group--has-hint'|preview(120) }}

## Arguments

| Name                    | Type    | Default | Required  | Description                                           
|---                      |---      |---      |---        |---        
| id                      | string  |         | Yes       | Checkbox id attribute value
| name                    | string  |         | Yes       | Checkbox name attribute value
| legend                  | string  |         | Yes       | Legend text for the checkbox group
| legendIsVisuallyHidden  | boolean | false   | No        | Option to hide legend text (to provide legend text for AT, but not visually)
| hint                    | string  |         | No        | Hint text for a question 
| error                   | string  |         | No        | Error text for a question
| checkboxGroup           | array   |         | Yes       | An array of checkboxes, with ID, value and label keys
| value                   | string  |         | Yes       | The value of a checkbox

