---
title: Prose
context:
  lede: For longform text, use a prose scope. This will style headings, paragraph text, lists, links and the strong element.
---

<div class="lede">
  {{ lede }}
</div>

```html
<div class="gv-s-prose">
</div>
```
A scope requires a parent class to style its children, the `prose` scope uses the parent class `.gv-s-prose`.


## Prose example

<div class="example-preview">
  {{ '@prose'|preview(600) }}
</div>


### Headings

* use GDS Transport Website Bold
* use sentence case for headings
* use headings consistently to create a clear hierarchy

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <div class="gv-s-prose">
      <h1>A 48px heading</h1>
      <h2>A 36px heading</h2>
      <h3>A 24px heading</h3>
      <h4>A 19px heading</h4>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 300px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-s-prose">
  <h1>A 48px heading</h1>
  <h2>A 36px heading</h2>
  <h3>A 24px heading</h3>
  <h4>A 19px heading</h4>
</div>
```


### Lead paragraph

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
    <div class="gv-s-prose">
      <p class="lede">
        A 24px lead paragraph, maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <p>
        A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
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
<div class="gv-s-prose">
  <p class="lede">
    A 24px lead paragraph, maecenas sed diam eget risus varius blandit sit amet non magna.
  </p>
</div>
```


### Body copy

* use GDS Transport Website Light
* avoid using bold and italics
* use 19px for body copy – 16px for smaller screens
* use smaller sizes only if there’s a user need (eg 16px, 14px, 12px)
* make sure lines of text don’t exceed 75 characters, as they become harder to read beyond that point

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <div class="gv-s-prose">
      <p>
        A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
        <strong>For text with strong emphasis</strong>
      </p>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 100px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-s-prose">
  <p>
    A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
    <strong>For text with strong emphasis</strong>
  </p>
</div>
```

### Links

* links within body copy should be blue and underlined
* links without surrounding text should not have a full stop at the end
* link colours can be found in the colour palette

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <div class="gv-s-prose">
      <p>
        <a href="#">A 19px link without surrounding text</a>
      </p>

      <p>
        <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 100px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-s-prose">
  <p>
    <a href="#">A 19px link without surrounding text</a>
  </p>
  <p>
    <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  </p>
</div>
```

### Lists

List items start with a lowercase letter and have no full stop at the end.

By default, unordered lists have bullets and ordered lists are numbered.

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <div class="gv-s-prose">
      <ul>
        <li>here is a numbered list</li>
        <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
        <li>vestibulum id ligula porta felis euismod semper</li>
        <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
      </ul>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 120px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-s-prose">
  <ul>
    <li>here is a bulleted list</li>
    <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
    <li>vestibulum id ligula porta felis euismod semper</li>
    <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
  </ul>
</div>
```

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <div class="gv-s-prose">
      <ol>
        <li>here is a numbered list</li>
        <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
        <li>vestibulum id ligula porta felis euismod semper</li>
        <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
      </ol>
    </div>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 120px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<div class="gv-s-prose">
  <ol>
    <li>here is a numbered list</li>
    <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
    <li>vestibulum id ligula porta felis euismod semper</li>
    <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
  </ol>
</div>
```
