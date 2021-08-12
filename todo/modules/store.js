export const addItem = (item) => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    todoItems.push(item);

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

export const getItems = () => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    return todoItems;
}

