import { Component } from "@angular/core";
import { Colors } from "./class/colors";
import { COLOR_BASICS } from "./const/material-colors.const";

@Component({
  selector: "agesse-main",
  templateUrl: "./agesse.component.html",
  styleUrls: ["./agesse.component.scss"],
})
export class AgesseComponent {

  colors: Colors[] = COLOR_BASICS;

}
