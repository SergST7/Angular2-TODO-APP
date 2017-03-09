/**
 * Created by SergST on 08.03.2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

//components
import {AppComponent} from "./app.component";



@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

