/**
 * Created by SergST on 13.03.2017.
 */

import {Todo} from "./todo";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoService{
  todos: Todo[];

  constructor(private http:Http){}

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