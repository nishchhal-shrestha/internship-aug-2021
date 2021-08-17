import { addTodoItem, getTodoItems, removeTodoItem } from './modules/todo.js'


const showTodo = async () => {    
    let todoItems = await getTodoItems();
    let ul = document.querySelector('#todo-item-list');
    console.log(ul);
    //console.log(todoItems);
    for (let key in todoItems) {
        
         
         let li = document.createElement('li');
        
         li.innerHTML = `
     <div class="input-group mb-3">
     <div name = "dueDate" data-id="${todoItems[key].name}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b></div>
     <div name = "todoItem" data-id="${todoItems[key].name}" class="form-control" value ="${todoItems[key].name}"><b>Task:</b> ${todoItems[key].name}</div>
     <button name="checkButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary checkButton" type="done" >Done</button>
     <button name="unDoneButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary unDoneButton" type="unDone" >Undone</button>
     <button name="deleteButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary deleteButton" type="delete" >Delete</button>
     </div>`;
     li.classList.add('todo-list-item');
     ul.appendChild(li);   
     }

     document.querySelectorAll('#todo-item-list button.deleteButton').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Remove Clicked', event, event.target.getAttribute('data-id'));
            console.log(event.target.parentNode);
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            removeTodoItem(event.target.getAttribute('data-id'));
        });
    });
 }

 const resetTodo = () => {
    let ul = document.querySelector('#todo-item-list');
         
    //      console.log(ul.removeChild('li'));
    //      console.log('here');
    ul.innerHTML='';

    //li.empty()
}


document.getElementById('todo-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('Todo Added', event);
    var data = new FormData(event.target);
    console.log('data', data, data.get('newTodoName'), data.get('newTodoDueDate'));
    await addTodoItem(data.get('newTodoName'))

    resetTodo();
    showTodo();
    
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


const showTodo2 = () => {    
    getTodoItems().then((todoItems) => {
        let ul = document.querySelector('#todo-item-list');
        console.log(ul);
        //console.log(todoItems);
        for (let key in todoItems) {
            
            
            let li = document.createElement('li');
            
            li.innerHTML = `
        <div class="input-group mb-3">
        <div name = "dueDate" data-id="${todoItems[key].name}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b></div>
        <div name = "todoItem" data-id="${todoItems[key].name}" class="form-control" value ="${todoItems[key].name}"><b>Task:</b> ${todoItems[key].name}</div>
        <button name="checkButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary checkButton" type="done" >Done</button>
        <button name="unDoneButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary unDoneButton" type="unDone" >Undone</button>
        <button name="deleteButton" data-id="${todoItems[key].name}" class="btn btn-outline-secondary deleteButton" type="delete" >Delete</button>
        </div>`;
        li.classList.add('todo-list-item');
        ul.appendChild(li);   
        }

        document.querySelectorAll('#todo-item-list button.deleteButton').forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('Remove Clicked', event, event.target.getAttribute('data-id'));
                console.log(event.target.parentNode);
                event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
                removeTodoItem(event.target.getAttribute('data-id'));
            });
        });
    });    
 }

setTimeout(async () => {
  await showTodo();
}, 3000)