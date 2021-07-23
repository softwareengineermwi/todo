import './style.css';
import { dragstart, dragover, drop, dragleave } from './draggability';
import { onChange } from './status';
import { update, clear, updateIndices, del, add } from './crud';

const tasks = JSON.parse(localStorage.getItem('things'));

function g(e) {
  return document.getElementById(e);
}

function jsonify(data) {
  return JSON.stringify(data)
}

function reload() {
  location.reload()
}

function loadTodo() {
  if (tasks !== null) {
    const updatedTasks = updateIndices(tasks)

    console.log(updatedTasks.map((j)=>{return j.index}).toString())

    localStorage.setItem('things', JSON.stringify(updatedTasks))

    for (let x = 0; x < updatedTasks.length; x++) {
      const task = updatedTasks[x];

      const tasktemplate = document.createElement('li');
      tasktemplate.id = x;
      tasktemplate.className = 'position-relative flex items-center';

      tasktemplate.draggable = true;
      tasktemplate.addEventListener('dragstart', dragstart);

      let dropArea = document.createElement('div');

      let container1 = document.createElement('div');
      let container2 = document.createElement('div');
      let container3 = document.createElement('div');

      let btn = document.createElement('button');
      let input = document.createElement('input');

      let h4 = document.createElement('h4');
      h4.innerText = task.description;
      h4.contentEditable = true;

      h4.setAttribute('data-id', x);
      h4.className = 'x width-100%';

      if (task.completed) {
        h4.classList.add('strike');
      }

      container1.className = 'flex items-center width-100%';
      container2.className = 'flex items-center space-between';
      container3.className = 'flex grow justify-end';

      input.className = 'x clearance-right';

      dropArea.className = 'drop-area';
      btn.value = x;
      btn.className = 'x bg-none material-icons border-none';
      btn.innerText = 'more_vert';

      h4.addEventListener('input', (e) => {
        localStorage.setItem('things', jsonify(update(e.target.textContent, x, tasks)))
      });

      h4.addEventListener('click', () => {
        btn.innerText = 'delete';
        btn.addEventListener('click', () => {
          localStorage.setItem('things', jsonify(del(tasks, btn.value)));
          reload();
        });
      });

      h4.addEventListener('focusout', () => {
        del(btn, false, tasks);
      });

      container2.append(input, h4);
      container3.appendChild(btn);

      container1.append(container2, container3);
      tasktemplate.append(dropArea, container1);

      dropArea.setAttribute('data-id', x);
      input.type = 'checkbox';
      input.setAttribute('data-id', x);
      input.checked = task.completed;

      input.addEventListener('change', () => {
        localStorage.setItem('things', jsonify(onChange(tasks, x)))
        reload()
      });

      dropArea.addEventListener('dragover', dragover);
      dropArea.addEventListener('dragleave', dragleave);
      dropArea.addEventListener('drop', drop);

      g('todo_list').appendChild(tasktemplate);
    }

    g('clear').addEventListener('click', clear);
  }
}

g('form').addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('things', jsonify(add(g('input-description').value, tasks)))
  reload()
});



onload = loadTodo()