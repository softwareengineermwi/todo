const { del } = require('./src/crud')

test('Should delete item from localstorage', () => {
  let tasks = JSON.parse(localStorage.getItem('things'))

  let btn = document.createElement('button')
  btn.value = 0
  let item = tasks[parseInt(btn.value)]
  del(btn, true)

  expect(item.description).toBe(tasks.description)
})