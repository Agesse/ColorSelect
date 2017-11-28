import { Component } from "@angular/core";
import { Colors } from "./class/colors";

@Component({
  selector: "agesse-main",
  templateUrl: "./agesse.component.html",
  styleUrls: ["./agesse.component.scss"],
})
export class AgesseComponent {

  colors: Colors[] = [{
    label: "green",
    css: "#2ecc71"
  },
  {
    label: "blue",
    css: "#3498db"
  },
  {
    label: "yellow",
    css: "#f1c40f"
  }];

}
