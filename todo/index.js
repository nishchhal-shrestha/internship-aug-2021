import { addTodoItem, getTodoItems, removeTodoItem } from './modules/todo.js'

document.getElementById('todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Todo Added', event);
    var data = new FormData(event.target);
    console.log('data', data, data.get('newTodoName'), data.get('newTodoDueDate'));
    addTodoItem(data.get('newTodoName'))
})

document.getElementById('get-todo-items').addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('todoItems', await getTodoItems());
})

document.getElementById('remove-todo-item').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('todoItems', document.getElementsByName('newTodoName')[0].value);
    removeTodoItem(document.getElementsByName('newTodoName')[0].value);
})

document.querySelectorAll('#todo-item-list button.remove-item').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Remove Clicked', event);
        console.log(event.target.parentNode);
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    });
});
