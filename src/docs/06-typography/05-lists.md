---
title: Lists
---

List items start with a lowercase letter and have no full stop at the end.

## Lists of related links

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <ul class="gv-c-list">
      <li><a href="#">Related link</a></li>
      <li><a href="#">Related link</a></li>
      <li><a href="#">Related link</a></li>
    </ul>
  '
  marginwidth="0"
  marginheight="0"
  frameborder="0"
  vspace="0"
  hspace="0"
  scrolling="yes"
  style="
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<ul class="gv-c-list">
  <li><a href="#">Related link</a></li>
  <li><a href="#">Related link</a></li>
  <li><a href="#">Related link</a></li>
</ul>
```

## Bulleted (unordered) lists

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <ul class="gv-c-list gv-c-list--bullet">
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
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
  ">
  </iframe>
</div>

```html
<ul class="gv-c-list gv-c-list--bullet">
  <li>here is a bulleted list</li>
  <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
  <li>vestibulum id ligula porta felis euismod semper</li>
  <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
</ul>
```

## Numbered (ordered) lists

<div class="example">
  <iframe srcdoc='
    <link media="all" rel="stylesheet" href="/stylesheets/govuk-frontend.css">
    <style>
      html {
        background: white;
      }
    </style>
    <ol class="gv-c-list gv-c-list--number">
      <li>here is a numbered list</li>
      <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
      <li>vestibulum id ligula porta felis euismod semper</li>
      <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
    </ol>
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
<ol class="gv-c-list gv-c-list--number">
  <li>here is a numbered list</li>
  <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
  <li>vestibulum id ligula porta felis euismod semper</li>
  <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
</ol>
```
