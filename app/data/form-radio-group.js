module.exports = {
  title: 'Form radio group',
  context: {
    id: 'contact',
    name: 'contact-group',
    legend: 'How do you want to be contacted?',
    hint: 'Hint text in here',
    error: 'Error text in here',
    radioGroup: {
      radio1: {
        id: 'example-contact-by-email',
        value: 'contact-by-email',
        label: 'Email'
      },
      radio2: {
        id: 'example-contact-by-phone',
        value: 'contact-by-phone',
        label: 'Text'
      },
      radio3: {
        id: 'example-contact-by-text',
        value: 'contact-by-text',
        label: 'Phone'
      }
    }
  }
}
