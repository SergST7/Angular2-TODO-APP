/**
 * Created by SergST on 10.03.2017.
 */

import {Component} from "@angular/core";
import {Todo} from "../shared/todo";
import {todos} from "../shared/data";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = todos;


  //
  // delete(todo: any){
  //   let index = this.todos.indexOf(todo);
  //   if (index != -1) {
  //     this.todos.splice(index, 1)
  //   }
  // }
}
