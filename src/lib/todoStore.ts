import { uuid } from "uuidv4";

export interface Todo {
  id: string;
  title: string;
}

const todos: Todo[] = [];

export async function getTodos() {
  return todos;
}

export async function addTodo(title: string) {
  const newTodo = {
    id: uuid(),
    title: title,
  };
  todos.push(newTodo);
  return newTodo;
}

export async function removeTodoById(id: string) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}
