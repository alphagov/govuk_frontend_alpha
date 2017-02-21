---
title: Colour
context:
  lede: Always use the GOV.UK colour palette.
---

<div class="lede">
  {{ lede }}
</div>

### Colour contrast

The colour contrast ratio for text and interactive elements should be at least 4.5:1 as recommended by the W3C.
Test your service to meet this standard.

### Sass variables
Use Sass variables in case colour values need to be updated.

<h3 class="swatch-section">Text</h3>
{% for colour in coloursText %}
<div class="swatch-wrapper">
  <h4>{{ colour.name }}</h4>
  <div class="swatch" style="background-color:{{ colour.hex }}; border: 1px solid black;"></div>
  <b class="swatch-hex">
    {{ colour.hex }}
  </b>
  <p class="swatch-scss">
    {{ colour.scss }}
  </p>
</div>
{% endfor %}

<h3 class="swatch-section">Links</h3>
{% for colour in coloursLinks %}
<div class="swatch-wrapper">
  <h4>{{ colour.name }}</h4>
  <div class="swatch" style="background-color:{{ colour.hex }}; border: 1px solid black;"></div>
  <b class="swatch-hex">
    {{ colour.hex }}
  </b>
  <p class="swatch-scss">
    {{ colour.scss }}
  </p>
</div>
{% endfor %}

<h3 class="swatch-section">Backgrounds</h3>
{% for colour in coloursBackgrounds %}
<div class="swatch-wrapper">
  <h4>{{ colour.name }}</h4>
  <div class="swatch" style="background-color:{{ colour.hex }}; border: 1px solid black;"></div>
  <b class="swatch-hex">
    {{ colour.hex }}
  </b>
  <p class="swatch-scss">
    {{ colour.scss }}
  </p>
</div>
{% endfor %}

<h3 class="swatch-section">Buttons</h3>
{% for colour in coloursButtons %}
<div class="swatch-wrapper">
  <h4>{{ colour.name }}</h4>
  <div class="swatch" style="background-color:{{ colour.hex }}; border: 1px solid black;"></div>
  <b class="swatch-hex">
    {{ colour.hex }}
  </b>
  <p class="swatch-scss">
    {{ colour.scss }}
  </p>
</div>
{% endfor %}

<h3 class="swatch-section">Focus</h3>
{% for colour in coloursFocus %}
<div class="swatch-wrapper">
  <h4>{{ colour.name }}</h4>
  <div class="swatch" style="background-color:{{ colour.hex }}; border: 1px solid black;"></div>
  <b class="swatch-hex">
    {{ colour.hex }}
  </b>
  <p class="swatch-scss">
    {{ colour.scss }}
  </p>
</div>
{% endfor %}

<h3 class="swatch-section">Extended palette</h3>

* used for graphs and supporting material
* for tints of the extended palette use 50% or 25%