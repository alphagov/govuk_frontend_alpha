const expectComponent = require('../../../test/specs/components/helper').expectComponent

describe('Breadcrumbs component', () => {
  it('should render', () => {
    expectComponent(
      'breadcrumbs',
      { items: [{title: 'Home', url: '/'}] },
      `<div class="gv-c-breadcrumbs">
        <ol class="gv-c-breadcrumbs__list gv-u-cf">
          <li class="gv-c-breadcrumbs__list-item">
            <a class="gv-c-breadcrumbs__list-link" href="/">Home</a>
          </li>
        </ol>
      </div>`
    )
  })
})
