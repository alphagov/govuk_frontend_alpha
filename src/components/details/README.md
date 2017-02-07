Use this to make your page easier to scan, only showing contextual information when required.

{{ '@details'|preview(70) }}

Click on "Summary text" to see how this works.

## The details and summary elements

This component uses the [HTML5 details and summary elements](http://html5doctor.com/the-details-and-summary-elements/).

These elements are only supported by a few modern browsers at the moment so you’ll need a JavaScript polyfill to make them work in other browsers. 

## Arguments

| Name        | Type    | Default | Required               | Description                                           
|---          |---      |---      |---                     |---           
| summary     | string  | N/A     | Yes                    | The content of the summary element              
| content     | string  | N/A     | content or contentHtml | The content of the details element              
| contentHtml | string  | N/A     | content or contentHtml | The content of the details element - allows HTML

