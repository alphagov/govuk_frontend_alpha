var through = require('through2')

let asset_path = function(value) {
  return `<%= asset_path '${value}' %>`
}

let block_for = function(key, value = '') {
  return `<%= content_for?(:${key}) ? yield(:${key}) : '${value}' %>`
}

let text_for = function(key, value = '') {
  return block_for(key, value)
}

let blocks = {
  after_header:            block_for('after_header'),
  body_classes:            block_for('body_classes'),
  body_start:              block_for('body_start'),
  body_end:                block_for('body_end'),
  content:                 block_for('content'),
  cookie_message:          block_for('cookie_message'),
  footer_support_links:    block_for('footer_support_links'),
  footer_top:              block_for('footer_top'),
  homepage_url:            text_for('homepage_url', 'https://www.gov.uk'),
  global_header_text:      text_for('global_header_text', 'GOV.UK'),
  head:                    block_for('head'),
  header_class:            block_for('header_class'),
  html_lang:               text_for('html_lang', 'en'),
  inside_header:           block_for('inside_header'),
  page_title:              block_for('page_title', "GOV.UK - The best place to find government services and information"),
  proposition_header:      block_for('proposition_header'),
  top_of_page:             block_for('top_of_page'),
  skip_link_message:       text_for('skip_link_message', 'Skip to main content'),
  logo_link_title:         text_for('logo_link_title', 'Go to the GOV.UK homepage'),
  licence_message:         block_for('licence_message', '<p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>'),
  crown_copyright_message: text_for('crown_copyright_message', '© Crown copyright'),
  asset_path:              asset_path()
}

blocks = Object.assign(blocks, {
  content: block_for('content', 'yield')
})

// Plugin level function(dealing with files)
function gulpTranspiler() {
  // Creating a stream through which each file will pass
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
    let template = file.contents.toString()

    // asset_path functions
    template = template.replace(/\{\{ asset_path \+ \'(.*?)\' \}\}/g, function(match){
      return asset_path(arguments[1])
    })

    // text_for functions
    template = template.replace(/\{\{ (.*?) \}\}/g, function(match){
      let block = arguments[1].split('|')
      let key = block[0]
      let value = block[1]
      return text_for(key, value)
    })

    // block_for functions
    template = template.replace(/\{\% block (.*?) \%\}(.*?)\{\% endblock \%\}/g, function(match){
      return block_for(arguments[1], arguments[2])
    })

    file.contents = new Buffer(template)

    cb(null, file);

  });

}

// Exporting the plugin main function
module.exports = gulpTranspiler;
