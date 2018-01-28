import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";

import { AgesseComponent } from "./agesse.component";
import { ColorSelectModule } from "./modules/color-select/color-select.module";


@NgModule({
  declarations: [
    AgesseComponent
  ],
  imports: [
    BrowserModule,
    ColorSelectModule
  ],
  providers: [],
  bootstrap: [AgesseComponent],
  exports: []
})
export class AgesseModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AgesseModule,
      providers: []
    };
  }
}
