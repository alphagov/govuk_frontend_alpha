const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Form radio group component', () => {
  it('should render', () => {
    expectComponent(
      'form-radio-group',
      {
        'id': 'contact',
        'name': 'contact-group',
        'legend': 'How do you want to be contacted?',
        'radioGroup': [
          {
            'id': 'example-contact-by-email',
            'value': 'contact-by-email',
            'label': 'Email'
          },
          {
            'id': 'example-contact-by-phone',
            'value': 'contact-by-phone',
            'label': 'Phone'
          },
          {
            'id': 'example-contact-by-text',
            'value': 'contact-by-text',
            'label': 'Text'
          }
        ]
      },
      `<div class="gv-c-form-group ">
        <fieldset>
          <legend>
            <span class="gv-c-form-group__label">How do you want to be contacted?</span>
          </legend>
          <div class="gv-c-multiple-choice">
            <input class="gv-c-multiple-choice__control" id="example-contact-by-email"
            type="radio" name="contact" value="contact-by-email">
            <label class="gv-c-multiple-choice__label" for="example-contact-by-email">Email</label>
          </div>
          <div class="gv-c-multiple-choice">
            <input class="gv-c-multiple-choice__control" id="example-contact-by-phone"
            type="radio" name="contact" value="contact-by-phone">
            <label class="gv-c-multiple-choice__label" for="example-contact-by-phone">Phone</label>
          </div>
          <div class="gv-c-multiple-choice">
            <input class="gv-c-multiple-choice__control" id="example-contact-by-text"
            type="radio" name="contact" value="contact-by-text">
            <label class="gv-c-multiple-choice__label" for="example-contact-by-text">Text</label>
          </div>
        </fieldset>
      </div>`
    )
  })
})
