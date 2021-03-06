function createTodo(todoItem, todoList) {
  todoList.push(todoItem);
  return todoList;
}

function destroyTodo(todo, todoList) {
  const index = todoList.indexOf(todo);
  todoList.splice(index, 1);
  todoList.forEach((todo, currentIndex) => {
    if (currentIndex >= index) {
      todo.index -= 1;
    }
  });
  return todoList;
}

function updateTodo(newTodo, oldTodo) {
  oldTodo = newTodo;
  return oldTodo;
}

export { createTodo, destroyTodo, updateTodo };