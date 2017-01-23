module.exports = {
  title: 'Breadcrumbs',
  status: 'wip',
  variants: [
    {
      name: 'default',
      context: {
        items: [
          {
            title: 'Section',
            url: '/section'
          },
          {
            title: 'Sub-section',
            url: '/section/sub-section'
          }
        ]
      }
    },
    {
      name: 'single_section',
      context: {
        items: [
          {
            title: 'Section',
            url: '/section'
          }
        ]
      }
    },
    {
      name: 'many_items',
      context: {
        items: [
          {
            title: 'Home',
            url: '/'
          },
          {
            title: 'Section',
            url: '/section'
          },
          {
            title: 'Sub-section',
            url: '/section/sub-section'
          },
          {
            title: 'Sub Sub-section',
            url: '/section/sub-section/sub-sub-section'
          }
        ]
      }
    },
    {
      name: 'last_breadcrumb_is_current_page',
      context: {
        items: [
          {
            title: 'Home',
            url: '/'
          },
          {
            title: 'Passports, travel and living abroad',
            url: '/browse/abroad'
          },
          {
            title: 'Travel abroad'
          }
        ]
      }
    }
  ],
  arguments: ['items']
}
