/**
 * Created by SergST on 10.03.2017.
 */

import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string;
  @Output() addEvent = new EventEmitter();

  createTask(){
    this.addEvent.emit(this.newTodoTitle);
  }
}
