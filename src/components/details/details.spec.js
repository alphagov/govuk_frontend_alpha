const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Details component', () => {
  it('should render', () => {
    expectComponent(
      'details',
      {
        summary: 'Summary text',
        details: 'Details text'
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

  it('should allow trusted a HTML message', function () {
    expectComponent(
      'details',
      {
        summary: 'Summary text',
        detailsHtml: '<p>We need to know your nationality so we can work out which elections you’re entitled to vote in.</p> <a href="#">I can’t provide my nationality</a>'
      },
      `<details class="gv-c-details">
        <summary class="gv-c-details__summary">
          <span class="gv-c-details__summary-text">Summary text</span>
        </summary>
        <div class="panel panel-border-narrow">
          <p>We need to know your nationality so we can work out which elections you’re entitled to vote in.</p> <a href="#">I can’t provide my nationality</a>
        </div>
      </details>`
    )
  })
})
