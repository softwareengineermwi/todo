const { del } = require('./src/crud')

test('Should delete item from localstorage', () => {
  let tasks = [
    {
      description: "some description",
      completed: false,
      index: 1
    },
    {
      description: "some more description",
      completed: false,
      index: 2
    },
    {
      description: "some even more description",
      completed: false,
      index: 3
    },
    {
      description: "some even, yes, more description",
      completed: false,
      index: 4
    }
  ]

  let btn = document.createElement('button')
  btn.value = 0

  tasks = del(btn, true, tasks)

  expect(tasks.length).toBe(tasks.length - 1)
})