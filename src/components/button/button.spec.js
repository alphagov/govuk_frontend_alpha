const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Button component', () => {
  it('should render', () => {
    expectComponent(
      'button',
      { text: 'hello!' },
      `<button class="gv-c-button ">
        hello!
      </button>`
    )
  })

  it('should render a start button', function () {
    expectComponent(
      'button',
      { text: 'Start now', isStart: true },
      `<button class="gv-c-button gv-c-button--start">
        Start now
      </button>`
    )
  })
})
