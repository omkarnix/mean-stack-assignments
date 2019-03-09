import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-conv",
  templateUrl: "./conv.component.html",
  styleUrls: ["./conv.component.css"]
})
export class ConvComponent implements OnInit {
  teraRoman: string;

  constructor() {}

  ngOnInit() {}

  onKey(value:string) {
    this.teraRoman = value;
  }
}
