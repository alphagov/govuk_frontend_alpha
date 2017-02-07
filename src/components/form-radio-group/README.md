## Radio buttons

* use these to let users choose a single option from a list
* for more than two options, radio buttons should be stacked

{{ '@form-radio-group'|preview(230) }}

## Use hint text

Make it clear with words that users can select only one option.

{{ '@form-radio-group--has-hint'|preview(230) }}

## Arguments

| Name                    | Type    | Default | Required  | Description                                           
|---                      |---      |---      |---        |---        
| id                      | string  |         | Yes       | Radio button id attribute
| name                    | string  |         | Yes       | Radio button name attribute value. Radio buttons that have the same value for the name attribute are in the same "radio button group"
| checked                 | boolean |         | No        | Use the checked attribute to indicate whether this item is selected
| value                   | string  |         | Yes       | Use the value attribute to define the value submitted by this item
| legend                  | string  |         | Yes       | Legend text for the radio group
| legendIsVisuallyHidden  | boolean | false   | No        | Option to hide legend text (to provide legend text for AT, but not visually)
| hint                    | string  |         | No        | Hint text for a question 
| error                   | string  |         | No        | Error text for a question
| radioGroup              | array   |         | Yes       | An array of radio buttons, with ID, value and label keys


