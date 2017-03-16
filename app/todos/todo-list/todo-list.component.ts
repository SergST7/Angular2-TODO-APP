/**
 * Created by SergST on 10.03.2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "../../shared/todo";



@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  @Input() todos: Todo[];

  constructor(){}

  ngOnInit(){
    // this.todoService.getTodos().subscribe(res => this.todos=res)
  }

  // delete(todo: Todo){
  //   this.todoService.deleteTodo(todo)
  // }

  // toggle(todo: Todo){
  //   this.todoService.toggleTodo(todo)
  // }
}
