module.exports = {
  title: 'Form radio group',
  status: 'wip',
  context: {
    id: 'contact',
    name: 'contact-group',
    legend: 'How do you want to be contacted?',
    legendIsVisuallyHidden: false,
    radioGroup: [{
      id: 'example-contact-by-email',
      value: 'contact-by-email',
      label: 'Email'
    }, {
      id: 'example-contact-by-phone',
      value: 'contact-by-phone',
      label: 'Phone'
    }, {
      id: 'example-contact-by-text',
      value: 'contact-by-text',
      label: 'Text'
    }]
  },
  variants: [{
    name: 'has hint',
    context: {
      hint: 'Select one'
    }
  },
  {
    name: 'has error',
    context: {
      error: 'Error text in here'
    }
  },
  {
    name: 'has hint and error',
    context: {
      hint: 'Select one',
      error: 'Error text in here'
    }
  }],
  arguments: ['id', 'name', 'legend', 'legendIsVisuallyHidden', 'hint', 'error', 'radioGroup', 'value']
}
