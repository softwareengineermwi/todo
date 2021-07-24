const { onChange } = require('./src/status');

let tasks = [
  {
    description: 'some description',
    completed: false,
    index: 1,
  },
  {
    description: 'some more description',
    completed: false,
    index: 2,
  },
  {
    description: 'some even more description',
    completed: false,
    index: 3,
  },
  {
    description: 'some even, yes, more description',
    completed: false,
    index: 4,
  },
];

test('Should toggle the completed status of task', () => {
  const position = 0
  expect(onChange(tasks, parseInt(position))[position].completed).toBe(tasks[position].completed)
})