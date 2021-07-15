/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
import './style.css'

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
  },
];

function loadTodo() {
  for (let x = 0; x < tasks.length; x++) {
    const task = tasks[x];  
    const template = document.createElement('template');
    const templateString = `<li class="flex items-center">
      <div class="flex items-center width-100%">
        <div class="flex items-center space-between">
          <div class="clearance-right"><input type="checkbox"></div>
          <div>
            <h4>${task.description}</h4>
          </div>
        </div>
        <div class="flex grow justify-end"><button class="bg-none material-icons border-none">more_vert</button></div>
    </li>`;

    template.innerHTML = templateString;

    g('todo_list').appendChild(template.content.firstChild);
  }
}

onload = loadTodo();
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */