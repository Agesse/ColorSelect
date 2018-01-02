import { Component, OnInit, Input } from "@angular/core";
import { Colors } from "../commons/class/colors";

@Component({
  selector: "agesse-color-select",
  templateUrl: "./color-select.component.html",
  styleUrls: ["./color-select.component.scss"]
})
export class ColorSelectComponent implements OnInit {

  @Input() colors: Colors[] = [];
  selectedColor: Colors = null;

  constructor() { }

  ngOnInit() {
    this.selectedColor = this.colors[0];
  }

  selectColor(color: Colors) {
    this.selectedColor = color;
  }

}
