/**
 * Created by SergST on 09.03.2017.
 */


import { Component } from "@angular/core";
// import {Todo} from "./shared/todo";
// import {todos} from "./shared/data";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular 2 TODO';
  // todos: Todo[] = todos;

  // create(todoTitle: string) {
  //   const todo: Todo = new Todo(todoTitle);
  //   this.todos.push(todo)
  // }
}
