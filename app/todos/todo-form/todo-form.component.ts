/**
 * Created by SergST on 10.03.2017.
 */

import {Component} from "@angular/core";
import {TodoService} from "../../shared/todo.service";

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string;

  constructor(private todoSrv: TodoService){};

  createTask(){
    this.todoSrv.createTodo(this.newTodoTitle)
  }
}
