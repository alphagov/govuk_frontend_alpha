'use strict'

const preview = (handle, height) => {
  // @FIXME: Alpha-only hack to allow component previews in documentation,
  // should not be used in beta, doesn't support RWD, or component interaction
  // @TODO: Ideally this would be an extension `{% render 'handle' %}`, but
  // couldn't get that working quicky, and this is short term anyway.
  return `<iframe
    class="InlinePreview-iframe" data-role="window"
    src="/components/preview/${handle.substring(1)}"
    sandbox="allow-same-origin allow-scripts"
    marginwidth="0"
    marginheight="0"
    frameborder="0"
    vspace="0"
    hspace="0"
    scrolling="yes"
    style="
      height: ${height}px;
      width: 100%;
      margin: 0;
      padding: 10px;
      border: 1px solid #ccc;
    "></iframe>`
}

module.exports.filters = {
  'preview': preview
}
