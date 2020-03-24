import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>welcome to {{ name}}</h1>
  <h3 [style.color]="iscolor">{{getuser()}}</h3>
  <h4>{{siteurl}}</h4>
  <h1 [style.color]="'red'">property binding</h1>
  <input [id]="myid" type="text" value="sreenath">
  <input [disabled]="true" [id]="myid" type="text" value="sreenath">

  <br><br>
  <h1 [ngStyle]="titleColor">ngClass using to style</h1>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name="sreenath"
  public siteurl = window.location.href;
  public myid = "testid";
  public iscolor= "green";

  public titleColor = {
    color: "blue",
    fontStyle: "italic"
  }
  
  constructor() { }

  ngOnInit() {
  }
  getuser()
  {
    return "HELOW "+this.name;
  }

}
