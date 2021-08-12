import { addTodoItem, getTodoItems } from './modules/todo.js'

document.getElementById('todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Todo Added', event);
    var data = new FormData(event.target);
    console.log('data', data, data.get('newTodoName'), data.get('newTodoDueDate'));
    addTodoItem(data.get('newTodoName'))
})

document.getElementById('get-todo-items').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('todoItems', getTodoItems());
})
