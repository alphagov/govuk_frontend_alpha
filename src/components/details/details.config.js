module.exports = {
  title: 'Details',
  status: 'wip',
  variants: [{
    name: 'default',
    context: {
      summary: 'Summary text',
      details: 'Details text'
    }
  },
  {
    name: 'details_html',
    context: {
      summary: 'Summary text',
      detailsHtml: '<p>We need to know your nationality so we can work out which elections you’re entitled to vote in.</p> <a href="#">I can’t provide my nationality</a>'
    }
  }],
  arguments: ['summary', 'details', 'detailsHtml']
}
