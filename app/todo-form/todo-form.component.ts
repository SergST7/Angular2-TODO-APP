/**
 * Created by SergST on 10.03.2017.
 */

import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string;

  createTask(){
    // let todo: Todo = new Todo(this.newTodoTitle);
    // this.todos.push(todo);
    // this.newTodoTitle = "";
  }
}
