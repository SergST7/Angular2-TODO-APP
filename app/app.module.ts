/**
 * Created by SergST on 08.03.2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

//components
import {AppComponent} from "./app.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todos/todo-list/todo-list.component";
import {TodoItemComponent} from "./todos/todo-item/todo-item.component";
import {TodosComponent} from "./todos/todos.component";

//service
import {TodoService} from "./shared/todo.service";
import {HttpModule} from "@angular/http";

import {InMemoryDataService} from "./shared/data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";


@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  providers: [TodoService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

