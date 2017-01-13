module.exports = {
  title: 'Form date group',
  status: 'wip',
  context: {
    id: 'dob',
    name: 'dob-group',
    legend: 'What is your date of birth?',
    hint: '',
    error: '',
    day: {
      id: 'dob-day',
      value: '',
      label: 'Day',
      min: '0',
      max: '31'
    },
    month: {
      id: 'dob-month',
      value: '',
      label: 'Month',
      min: '0',
      max: '12'
    },
    year: {
      id: 'dob-year',
      value: '',
      label: 'Year',
      min: '0',
      max: '2050'
    }
  },
  variants: [{
    name: 'has hint',
    context: {
      hint: 'For example, 31 3 1980'
    }
  },
  {
    name: 'has error',
    context: {
      error: 'Error text in here'
    }
  },
  {
    name: 'has hint and error',
    context: {
      hint: 'For example, 31 3 1980',
      error: 'Error text in here'
    }
  }],
  arguments: ['id', 'name', 'legend', 'hint', 'error', 'day', 'month', 'year']
}
