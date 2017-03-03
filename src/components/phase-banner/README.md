You have to use an alpha banner if your thing is in alpha, and a beta banner if it’s in beta.

## Alpha banner

{{ '@phase-banner'|preview(100) }}

## Arguments

| Name        | Type        | Default | Required                          | Description                                           
|---          |---          |---      |---                                |---     
| phase       | string      |         | Yes                               | The text in the phase tag - alpha, beta           
| message     | string      |         | use either message or messageHtml | The text accompanying the phase tag               
| messageHtml | string      |         | use either message or messageHtml | The text accompanying the phase tag - allows HTML 
