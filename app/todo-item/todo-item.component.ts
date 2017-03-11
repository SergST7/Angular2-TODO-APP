/**
 * Created by SergST on 10.03.2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "../shared/todo";


@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteEvent = new EventEmitter();

  toggle(){
    this.todo.completed = !this.todo.completed
  }

  onDelete(){
    this.deleteEvent.emit(this.todo)
  }

}
