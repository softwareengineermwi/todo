import './style.css'

//new list 
function g(e) {
  return document.getElementById(e)
}

const tasks = [
  {
    description: "Sleep",
    completed: false,
    index: 0
  },
  {
    description: "Sleep more",
    completed: false,
    index: 0
  },
  {
    description: "Sleep more, again",
    completed: false,
    index: 0
  }
]

function loadTodo() {
  for (let x = 0; x < tasks.length; x++) {
    let task = tasks[x]

    let template = document.createElement('template')

    let templateString = `<li class="flex items-center">
      <div class="flex items-center width-100%">
        <div class="flex items-center space-between">
          <div class="clearance-right"><input type="checkbox"></div>
          <div>
            <h4>${task.description}</h4>
          </div>
        </div>
        <div class="flex grow justify-end"><button class="bg-none material-icons border-none">more_vert</button></div>
    </li>`

    template.innerHTML = templateString

    g('todo_list').appendChild(template.content.firstChild)
  }
}

onload = loadTodo()

// //add to do list 
// const task = document.forms['add-todo-List']
// addTask.addEventListener('submit', function (e) {
//   const a = addTask.querySelector('input[type="text"]').value
//   //create todo list 
//   const li = document.createElement('li')
//   const title = document.createElement('h4')
//   const btn = document.createElement('button')
// })