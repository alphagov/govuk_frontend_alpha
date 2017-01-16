const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Details component', () => {
  it('should render', () => {
    expectComponent(
      'details',
      {
        'summary': 'Summary text',
        'text': 'Details text'
      },
      `<details class="gv-c-details">
        <summary class="gv-c-details__summary">
          <span class="gv-c-details__summary-text">Summary text</span>
        </summary>
        <div class="panel panel-border-narrow">
          Details text
        </div>
      </details>`
    )
  })
})
