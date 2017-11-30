import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AgesseComponent } from "./agesse.component";
import { ColorSelectComponent } from "./color-select/color-select/color-select.component";


@NgModule({
  declarations: [
    AgesseComponent,
    ColorSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AgesseComponent],
  exports: []
})
export class AgesseModule { }
