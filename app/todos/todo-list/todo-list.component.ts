/**
 * Created by SergST on 10.03.2017.
 */

import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Todo} from "../../shared/todo";



@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  @Input() todos: Todo[];
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  ngOnInit(){
    // this.todoService.getTodos().subscribe(res => this.todos=res)
  }

  onDelete(todo: Todo){
    this.delete.emit(todo)
  }

  onToggle(todo: Todo){
    this.toggle.emit(todo)
  }
}
