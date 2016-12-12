module.exports = {
  title: 'Phase Banner',
  status: 'wip',
  variants: [{
    name: 'default',
    context: {
      phase: 'alpha',
      message: 'This is a new service – your feedback will help us to improve it.'
    }
  },
  {
    name: 'beta',
    context: {
      phase: 'beta',
      message: 'This service is in Beta – your feedback will help us to improve it.'
    }
  }],
  arguments: ['phase', 'message']
}
