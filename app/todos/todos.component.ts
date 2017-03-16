/**
 * Created by SergST on 16.03.2017.
 */

import {Component,  OnInit} from "@angular/core";
import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.todoService.getTodos().subscribe(res => this.todos=res)
  }

  delete(todo: Todo){
    this.todoService.deleteTodo(todo).subscribe(() => {
      let index = this.todos.indexOf(todo);
      if (index != -1) {
        this.todos.splice(index, 1)
      }
    })
  }

  toggle(todo: Todo){
    this.todoService.toggleTodo(todo).subscribe(
      () => todo.completed = !todo.completed
    )
  }

}
