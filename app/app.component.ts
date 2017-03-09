/**
 * Created by SergST on 09.03.2017.
 */


import { Component } from "@angular/core";

const todos = [
  'Learn HTML',
  'Learn JS',
  'Learn Angular 2'
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
