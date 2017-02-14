const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Back link component', () => {
  it('should render', () => {
    expectComponent(
      'link-back',
      {
        'link': '#',
        'text': 'Back'
      },
      `<a href="#" class="gv-c-link-back">Back</a>
      `
    )
  })
})
