module.exports = {
  title: 'Button',
  status: 'wip',
  context: {
    text: 'Default button text'
  },
  variants: [{
    name: 'start',
    context: {
      isStart: true,
      text: 'Start now'
    }
  }],
  arguments: ['text', 'type', 'isStart']
}
