const expectComponent = require('./helper').expectComponent

describe('Button component', function () {
  it('should render', () => {
    expectComponent(
      'button',
      { text: 'hello!' },
      `<button class="gv-c-button ">
        hello!
      </button>`
    )
  })

  it('should render primary', function () {
    expectComponent(
      'button',
      { text: 'hello!', isPrimary: true },
      `<button class="gv-c-button gv-c-button--primary">
        hello!
      </button>`
    )
  })
})
