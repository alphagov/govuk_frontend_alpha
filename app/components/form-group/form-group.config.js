module.exports = {
  title: 'Form group',
  status: 'wip',
  context: {
    id: 'full-name',
    name: 'full-name',
    label: 'Full name',
    hint: '',
    error: ''
  },
  variants: [{
    name: 'has hint',
    context: {
      hint: 'As shown on your birth certificate or passport'
    }
  },
  {
    name: 'has error',
    context: {
      error: 'Error message about full name goes here'
    }
  },
  {
    name: 'has hint and error',
    context: {
      hint: 'As shown on your birth certificate or passport',
      error: 'Error message about full name goes here'
    }
  },
  {
    name: 'textarea',
    context: {
      isTextarea: 'true'
    }
  }],
  arguments: ['id', 'name', 'label', 'hint', 'error', 'isTextarea']
}
