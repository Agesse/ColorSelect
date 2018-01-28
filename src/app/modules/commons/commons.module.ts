import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CommonsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonsModule,
      providers: []
    };
  }
}
export * from "./class/colors";
export * from "./const/material-colors.const";
