const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Form date group component', () => {
  it('should render', () => {
    expectComponent(
      'form-date-group',
      {
        'id': 'dob',
        'name': 'dob-group',
        'legend': 'What is your date of birth?',
        'hint': 'For example, 31 3 1980',
        'error': '',
        'day': {
          'id': 'dob-day',
          'value': '',
          'label': 'Day',
          'min': '0',
          'max': '31'
        },
        'month': {
          'id': 'dob-month',
          'value': '',
          'label': 'Month',
          'min': '0',
          'max': '12'
        },
        'year': {
          'id': 'dob-year',
          'value': '',
          'label': 'Year',
          'min': '0',
          'max': '2050'
        }
      },
      `<div class="gv-c-form-group gv-c-form-group-date ">
        <fieldset>
          <legend>
            <span class="gv-c-form-group__label">What is your date of birth?</span>
            <span class="gv-c-form-group__hint" id="dob-hint">For example, 31 3 1980</span>
          </legend>
          <div class="gv-c-form-group gv-c-form-group__date-day">
            <label class="gv-c-form-group__label" for="dob-day">Day</label>
            <input class="gv-c-form-group__control gv-c-form-group-date__control" id="dob-day" name="dob-day" value="" type="number" pattern="[0-9]*" min="0" max="31" aria-describedby="dob-hint">
          </div>
          <div class="gv-c-form-group gv-c-form-group__date-month">
            <label class="gv-c-form-group__label" for="dob-month">Month</label>
            <input class="gv-c-form-group__control gv-c-form-group-date__control" id="dob-month" name="dob-month" value="" type="number" pattern="[0-9]*" min="0" max="12">
          </div>
          <div class="gv-c-form-group gv-c-form-group__date-year">
            <label class="gv-c-form-group__label" for="dob-year">Year</label>
            <input class="gv-c-form-group__control gv-c-form-group-date__control" id="dob-year" name="dob-year" value="" type="number" pattern="[0-9]*" min="0" max="2050">
          </div>
        </fieldset>
      </div>`
    )
  })
})
