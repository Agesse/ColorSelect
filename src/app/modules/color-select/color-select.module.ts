import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColorSelectComponent } from "./color-select.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColorSelectComponent
  ],
  exports: [ColorSelectComponent]
})
export class ColorSelectModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ColorSelectModule,
      providers: []
    };
  }
}
