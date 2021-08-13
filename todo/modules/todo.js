import { addItem, getItems, removeItemByName } from './store.js'

export const addTodoItem = (name) => {
    console.log('Added Todo Item', name);
    if(!name) {
        throw new Error('Name is required')
    }

    const todoItems = getItems();

    for(let item of todoItems) {
        if(item.name.toLowerCase() === name.toLowerCase()) {
            throw new Error('Item already exists')
        }
    }

    let newTodoItem = {
        id: Math.random(),
        name: name,
        dueDate: null,
        isComplete: false,
        completedDate: null
    }
    addItem(newTodoItem);
    return newTodoItem;
}

export const removeTodoItem = (name) => {
    console.log('Removed Todo Item', name);
    removeItemByName(name);
}

export const markTodoItemAsDone = (todoItem) => {
    console.log('Marked Todo Item as done', todoItem);
    return {
        id: todoItem.id,
        name: todoItem.name,
        dueDate: todoItem.dueDate,
        isComplete: true,
        completedDate: new Date()
    }
}

export const setDueDateToTodoItem = (todoItem) => {
    console.log('Set Due date to Todo Item', todoItem);
}

export const getTodoItems = async () => {
    return getItems();
}

