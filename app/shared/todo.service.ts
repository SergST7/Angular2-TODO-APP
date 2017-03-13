/**
 * Created by SergST on 13.03.2017.
 */

import {Todo} from "./todo";
import {todos} from "./data";

export class TodoService{
  todos: Todo[] = todos;

  getTodos():Todo[] {
    return this.todos
  }

  createTodo(title: string){
    this.todos.push(new Todo(title))
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1)
    }
  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed
  }
}