// import store

export const addTodoItem = (name) => {
    console.log('Added Todo Item', name);
    return {
        id: 1,
        name: name,
        dueDate: null,
        isComplete: false,
        completedDate: null
    }
}

export const removeTodoItem = (todoItem) => {
    console.log('Removed Todo Item', todoItem);
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

