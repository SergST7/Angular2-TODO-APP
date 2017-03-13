/**
 * Created by SergST on 10.03.2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";


@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  @Input() todos: Todo[];

  constructor(private todoService: TodoService){
    this.todos = [];
  }

  ngOnInit(){
    this.todos = this.todoService.getTodos()
  }

  delete(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1)
    }
  }
}
