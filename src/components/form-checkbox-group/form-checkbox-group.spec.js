const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Form checkbox group component', () => {
  it('should render', () => {
    expectComponent(
      'form-checkbox-group',
      {
        'id': 'contact',
        'name': 'contact-group',
        'legend': 'How do you want to be contacted?',
        'checkboxGroup': [
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
          <label class="gv-c-form-custom selection-button-checkbox" for="example-contact-by-email">
            <input class="gv-c-form-custom__control" id="example-contact-by-email"
            type="checkbox" name="contact" value="contact-by-email">Email</label>
          <label class="gv-c-form-custom selection-button-checkbox" for="example-contact-by-phone">
            <input class="gv-c-form-custom__control" id="example-contact-by-phone"
            type="checkbox" name="contact" value="contact-by-phone">Phone</label>
          <label class="gv-c-form-custom selection-button-checkbox" for="example-contact-by-text">
            <input class="gv-c-form-custom__control" id="example-contact-by-text"
            type="checkbox" name="contact" value="contact-by-text">Text</label>
        </fieldset>
      </div>`
    )
  })
})
