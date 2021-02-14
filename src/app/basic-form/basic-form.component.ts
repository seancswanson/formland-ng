import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"],
})
export class BasicFormComponent implements OnInit {
  basicForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    age: new FormControl(""),
  });
  constructor() {}

  ngOnInit() {
    console.log(this.basicForm);
  }
}
