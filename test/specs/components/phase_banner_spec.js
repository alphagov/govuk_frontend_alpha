const expectComponent = require('./helper').expectComponent

describe('Phase banner component', () => {
  it('should render', () => {
    expectComponent(
      'phase-banner',
      {
        phase: 'Alpha',
        message: 'This is a new service – your feedback will help us to improve it.'
      },
      `<div class="gv-c-phase-banner">
        <p class="gv-c-phase-banner__content"> <strong class="gv-c-phase-tag">Alpha</strong>
          <span class="gv-c-phase-banner__text">This is a new service – your feedback will help us to improve it.</span>
        </p>
      </div>`
    )
  })

  it('should render beta', function () {
    expectComponent(
      'phase-banner',
      {
        phase: 'beta',
        message: 'This service is in Beta – your feedback will help us to improve it.'
      },
      `<div class="gv-c-phase-banner">
        <p class="gv-c-phase-banner__content"> <strong class="gv-c-phase-tag">beta</strong>
          <span class="gv-c-phase-banner__text">This service is in Beta – your feedback will help us to improve it.</span>
        </p>
      </div>`
    )
  })

  it('should allow trusted a HTML message', function () {
    expectComponent(
      'phase-banner',
      {
        phase: 'beta',
        messageHtml: 'This service is new  – your <a href="#">feedback</a> will help us to improve it.'
      },
      `<div class="gv-c-phase-banner">
        <p class="gv-c-phase-banner__content"> <strong class="gv-c-phase-tag">beta</strong>
          <span class="gv-c-phase-banner__text">This service is new  – your <a href="#">feedback</a> will help us to improve it.</span>
        </p>
      </div>`
    )
  })
})
