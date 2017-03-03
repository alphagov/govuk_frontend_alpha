To ask for memorable dates, like dates of birth, use text fields for users to complete.

{{ '@form-date-group'|preview(230) }}

## Asking for memorable dates

Use 3 fields as it’ll be easier for you to validate each part rather than trying to review a single field.

Don’t automatically tab users between fields because this can clash with normal keyboard controls and confuse people.

Calendar controls aren’t particularly useful for known dates and some users struggle with select boxes.

## Arguments

| Name   | Type    | Default | Required  | Description                                           
|---     |---      |---      |---        |---    
| id     | string  |         | Yes       | Date of birth id attribute value
| name   | string  |         | Yes       | Date of birth name attribute value
| legend | string  |         | Yes       | Legend text for the checkbox group - e.g. what is your date of birth?
| hint   | string  |         | No        | Hint text
| error  | string  |         | No        | Error text
| day    | string  | Day     | Yes       | Text for 'Day' label
| month  | string  | Month   | Yes       | Text for 'Month' label
| year   | string  | Year    | Yes       | Text for 'Year' label
