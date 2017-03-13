---
title: Links
---

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
    <main>
      <p>
        <a href="#">A 19px link without surrounding text</a>
      </p>
      <p>
        <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </main>
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
<main>
  <p>
    <a href="#">A 19px link without surrounding text</a>
  </p>
  <p>
    <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  </p>
</main>
```

## Back links

<div class="example-preview">
  {{ '@link-back'|preview(100) }}
</div>

The back link is provided as a [component](/components/browser/link-back--default/).
