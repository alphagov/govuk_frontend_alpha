const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Notice component', () => {
  it('should render', () => {
    expectComponent(
      'notice',
      {
        'iconDescription': 'Warning',
        'text': 'Legal text goes in here'
      },
      `<div class="gv-c-notice">
        <i class="gv-c-notice__icon gv-c-notice__icon--important"><span class="gv-c-notice__icon-fallback-text">Warning</span></i>
        <strong class="gv-c-notice__text">Legal text goes in here</strong>
      </div>`
    )
  })
})
