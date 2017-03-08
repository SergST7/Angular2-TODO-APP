/**
 * Created by SergST on 09.03.2017.
 */


import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
  <header>
    <img src="img/angular.svg" alt="logo">
    <h1>{{ title }}</h1>
  </header>
`
})
export class AppComponent {
  title = 'Angular 2 TODO'
}
