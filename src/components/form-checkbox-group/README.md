## Checkboxes

Use checkboxes to select either on/off toggles or multiple selections.

{{ '@form-checkbox-group'|preview(230) }}

## Use hint text

Make it clear with words when users can select one or multiple options.

{{ '@form-checkbox-group--has-hint'|preview(230) }}

## Arguments

| Name                    | Type    | Default | Required  | Description                                           
|---                      |---      |---      |---        |---        
| id                      | string  |         | Yes       | Checkbox id attribute value
| name                    | string  |         | Yes       | Checkbox name attribute value
| checked                 | boolean |         | No        | Use the checked attribute to indicate whether this item is selected
| value                   | string  |         | Yes       | Use the value attribute to define the value submitted by this item
| legend                  | string  |         | Yes       | Legend text for the checkbox group
| legendIsVisuallyHidden  | boolean | false   | No        | Option to hide legend text (to provide legend text for AT, but not visually)
| hint                    | string  |         | No        | Hint text for a question 
| error                   | string  |         | No        | Error text for a question
| checkboxGroup           | array   |         | Yes       | An array of checkboxes, with ID, value and label keys
