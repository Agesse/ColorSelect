import { Component } from "@angular/core";
import { Colors } from "./modules/commons/class/colors";
import { COLOR_BASICS } from "./modules/commons/const/material-colors.const";

@Component({
  selector: "agesse-main",
  templateUrl: "./agesse.component.html",
  styleUrls: ["./agesse.component.scss"],
})
export class AgesseComponent {

  colors: Colors[] = COLOR_BASICS;

}
