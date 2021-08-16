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

export const getMovies = async () => {
    // let todoItems = window.localStorage.getItem('todos');
    // if(todoItems) {
    //     todoItems = JSON.parse(todoItems);
    // } else {
    //     todoItems = [];
    // }
    // return todoItems;

    return fetch('https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers').then(response => response.json())
}

export const removeItemByName = (name) => {
    let todoItems = window.localStorage.getItem('todos');

    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    
    let todoItemsByNameIndex = todoItems.findIndex((item) => {
        return item.name.toLowerCase() == name.toLowerCase();
    })
    console.log('Item index', todoItemsByNameIndex);
    if(todoItemsByNameIndex > -1) {
        todoItems.splice(todoItemsByNameIndex, 1)
    }

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

export const updateCompletedStatusByName = (name, status) => {
    let todoItems = window.localStorage.getItem('todos');

    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    
    let todoItemsByNameIndex = todoItems.findIndex((item) => {
        return item.name.toLowerCase() == name.toLowerCase();
    })
    console.log('Item index', todoItemsByNameIndex);
    if(todoItemsByNameIndex > -1) {
        todoItems[todoItemsByNameIndex].isComplete = status;
    }

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

