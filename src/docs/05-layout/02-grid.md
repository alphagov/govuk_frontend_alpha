---
title: Grid layout
context:
  lede: A mobile-first, float-based layout system.
---

<div class="lede">
  {{ lede}}
</div>


## Grid unit proportions

* introduce columns as the content requires it – base column ratios on halves, thirds or quarters of the page width
* for screen breakpoints use media queries – find these in the _conditionals.scss file


## Grid unit proportions

### Full width

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
      <div class="gv-o-grid-item gv-u-full">
        <p>Content</p>
      </div>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-full">
    <p>Content</p>
  </div>
</div>
```


### Halves

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
      <div class="gv-o-grid-item gv-u-one-half">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-half">
        <p>Content</p>
      </div>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-half">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-half">
    <p>Content</p>
  </div>
</div>
```

### Thirds

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
      <div class="gv-o-grid-item gv-u-one-third">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-third">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-third">
        <p>Content</p>
      </div>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
</div>
```

### Two thirds / One third

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-two-thirds">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
  </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-two-thirds">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
</div>
```

### One third / Two thirds

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
      <div class="gv-o-grid-item gv-u-one-third">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-two-thirds">
        <p>Content</p>
      </div>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-two-thirds">
    <p>Content</p>
  </div>
</div>
```

### Quarters

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
      p {
        width: 100%;
        background-image: repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px);
        margin-bottom: 0;
        height: 60px;
        overflow: hidden;
        text-indent: -999em;
      }
    </style>
    <div class="gv-o-grid-row">
      <div class="gv-o-grid-item gv-u-one-quarter">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-quarter">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-quarter">
        <p>Content</p>
      </div>
      <div class="gv-o-grid-item gv-u-one-quarter">
        <p>Content</p>
      </div>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
</div>
```
