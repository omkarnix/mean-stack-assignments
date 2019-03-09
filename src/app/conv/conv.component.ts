import { Component, OnInit } from "@angular/core";
import { dec2Roman } from "dec2roman";

@Component({
  selector: "app-conv",
  templateUrl: "./conv.component.html",
  styleUrls: ["./conv.component.css"]
})
export class ConvComponent implements OnInit {
  teraRoman: string;

  constructor() {}

  ngOnInit() {}

  onKey(value: string) {
    let parsedDecNum = parseInt(value);

    if (isNaN(parsedDecNum)) {
      this.teraRoman = "No roman equivalent of above value!";
    } else {
      this.teraRoman = dec2Roman(parsedDecNum);
    }
  }
}
