const { del, add, update, updateIndices, clear } = require('./src/crud');

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

test('Should delete item from localstorage', () => {
  const currentLength = tasks.length
  expect(del(tasks, 0).length).toBe(currentLength - 1);
});

test('Should add item to localStorage', () => {
  const currentLength = tasks.length
  expect(add('Some description here', tasks).length).toBe(currentLength + 1)
})

test('Should update the task description', () => {
  const position = 0
  const description = "New description"
  expect(update(description, position, tasks)[position].description).toBe(tasks[position].description)
})

test('Should update task index', () => {
  const unorderdTasks = [
    {
      description: 'some description',
      completed: false,
      index: 3,
    },
    {
      description: 'some more description',
      completed: false,
      index: 1,
    },
    {
      description: 'some even more description',
      completed: false,
      index: 2,
    },
    {
      description: 'some even, yes, more description',
      completed: false,
      index: 4,
    },
  ]
  expect(updateIndices(unorderdTasks).join()).toBe(tasks.join())
})

test('Should clear all completed tasks', () => {
  const unclearedTasks = [
    {
      description: 'some description',
      completed: true,
      index: 1,
    },
    {
      description: 'some more description',
      completed: false,
      index: 2,
    },
    {
      description: 'some even more description',
      completed: true,
      index: 3,
    },
    {
      description: 'some even, yes, more description',
      completed: false,
      index: 4,
    },
  ]
  const clearedTasks = [
    {
      description: 'some more description',
      completed: false,
      index: 2,
    },
    {
      description: 'some even, yes, more description',
      completed: false,
      index: 4,
    },
  ]

  expect(clear(unclearedTasks).join()).toBe(clearedTasks.join())
})