---
title: Body text
---

## Lead paragraph

* use 24px for a lead paragraph
* there should only be one lead paragraph per page

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>   
    <p class="gv-u-text-lede">
      A 24px lead paragraph, maecenas sed diam eget risus varius blandit sit amet non magna.
    </p>
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
<p class="gv-u-text-lede">
    A 24px lead paragraph, maecenas sed diam eget risus varius blandit sit amet non magna.
</p>
```

## Body copy

* use GDS Transport Website Light
* avoid using bold and italics
* use 19px for body copy – 16px for smaller screens
* use smaller sizes only if there’s a user need (eg 16px, 14px)
* make sure lines of text don’t exceed 75 characters, as they become harder to read beyond that point

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>

    <p class="gv-u-text-small">
      A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
    </p> 

    <p class="gv-u-text-xsmall">
      A 16px supporting text paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
    </p> 
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 200px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<main>
  <p>
    A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
  </p> 
</main>

<p class="gv-u-text-small">
  A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
</p> 

<p class="gv-u-text-xsmall">
  A 16px supporting text paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
</p> 
```
