/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
import './style.css';
import { dragstart } from './draggability';
import { dragover } from './draggability';
import { drop } from './draggability';
import { dragleave } from './draggability';
import { onchange } from './status';

function g(e) {
  return document.getElementById(e);
}

let sampleData = [
  {
    description: "Sleep",
    completed: false,
    index: 1
  },
  {
    description: "Sleep more",
    completed: true,
    index: 2
  },
  {
    description: "Sleep more, again",
    completed: false,
    index: 3
  },
];

function loadTodo() {
  if (localStorage.getItem('things') == null) {
    localStorage.setItem('things', JSON.stringify(sampleData));
  }

  const tasks = JSON.parse(localStorage.getItem('things'));

  for (let x = 0; x < tasks.length; x++) {
    const task = tasks[x];

    const tasktemplate = document.createElement('li');
    tasktemplate.id = x;
    tasktemplate.className = 'position-relative flex items-center';

    tasktemplate.draggable = true;
    tasktemplate.addEventListener('dragstart', dragstart);

    let dropArea = document.createElement('div')

    let container1 = document.createElement('div')
    let container2 = document.createElement('div')
    let container3 = document.createElement('div')

    let btn = document.createElement('button')
    let input = document.createElement('input')
    
    let h4 = document.createElement('h4')
    h4.innerText = task.description

    if (task.completed) {
      h4.classList.add('strike')
    }

    container1.className = "flex items-center width-100%"
    container2.className = "flex items-center space-between"
    container3.className = "flex grow justify-end"

    input.className = "x clearance-right"

    dropArea.className = "drop-area"
    btn.className = "bg-none material-icons border-none"
    btn.innerText = 'more_vert'

    container2.append(input, h4)
    container3.appendChild(btn)

    container1.append(container2, container3)
    tasktemplate.append(dropArea, container1)

    dropArea.setAttribute('data-id', x)
    input.type = 'checkbox'
    input.setAttribute('data-id', x)
    input.checked = task.completed
    input.addEventListener('change', onchange)

    dropArea.addEventListener('dragover', dragover)
    dropArea.addEventListener('dragleave', dragleave)
    dropArea.addEventListener('dragover', dragover)

    dropArea.addEventListener('drop', drop);

    g('todo_list').appendChild(tasktemplate);
  }
}

onload = loadTodo();
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */