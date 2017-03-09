/**
 * Created by SergST on 09.03.2017.
 */


import { Component } from "@angular/core";

const todos = [
  {title: 'Learn HTML', completed: true},
  {title: 'Learn JS', completed: false},
  {title: 'Angular 2', completed: false}
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular 2 TODO';
  todos = todos
}
