---
title: Colour
context:
  lede: Always use the GOV.UK colour palette.
---

### Colour contrast

The colour contrast ratio for text and interactive elements should be at least 4.5:1 as recommended by the W3C.
Test your service to meet this standard.

### Sass variables
Use Sass variables in case colour values need to be updated.

<h3 class="swatch-section">Colours</h3>

{% for scss, hex in colors %}
  <div class="swatch-wrapper">
    <div class="swatch" style="background-color:{{ hex }};">
    </div>
    <b class="swatch-hex">
      {{ hex }}
    </b>
    <p class="swatch-scss">
      {{ scss }}
    </p>
  </div>
{% endfor %}
