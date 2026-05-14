const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskText = input.value;
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const actions = document.createElement('div');
    actions.classList.add('actions');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Fait";
    doneBtn.classList.add('done-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add('delete-btn');

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    todoList.appendChild(li);

    input.value = "";

    doneBtn.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
});