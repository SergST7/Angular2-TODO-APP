/**
 * Created by SergST on 08.03.2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";

//components
import {AppComponent} from "./app.component";



@NgModule ({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

