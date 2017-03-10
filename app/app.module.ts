/**
 * Created by SergST on 08.03.2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

//components
import {AppComponent} from "./app.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";



@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

