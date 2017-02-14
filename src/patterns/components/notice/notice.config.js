module.exports = {
  title: 'Notice',
  status: 'wip',
  variants: [
    {
      name: 'default',
      context: {
        iconDescription: 'Warning',
        text: 'Legal text in here'
      }
    },
    {
      name: 'Long text',
      context: {
        iconDescription: 'Warning',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  ],
  arguments: ['iconDescription', 'text']
}
