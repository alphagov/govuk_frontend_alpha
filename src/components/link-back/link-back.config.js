module.exports = {
  title: 'Back link',
  status: 'wip',
  variants: [
    {
      name: 'default',
      context: {
        link: '#',
        text: 'Back'
      }
    },
    {
      name: 'longer',
      context: {
        link: '#',
        text: 'Back to the start of this transaction'
      }
    }
  ],
  arguments: ['link', 'text']
}
