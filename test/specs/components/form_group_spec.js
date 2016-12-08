const expectComponent = require('./helper').expectComponent

describe('Form group component', function () {
  it('should render', () => {
    expectComponent(
      'form-group',
      {
        'id': 'full-name',
        'name': 'full-name',
        'label': 'Full name'
      },
      `<div class="gv-c-form-group ">
        <label class="gv-c-form-group__label" for="full-name">
          Full name
        </label>
        <input class="gv-c-form-group__control " id="full-name" name="full-name" value="" type="text">
      </div>`
    )
  })
})
