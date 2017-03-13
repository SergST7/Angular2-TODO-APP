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
}