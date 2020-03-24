import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
  <h1>uehfkr</h1>
  <input [(ngModel)]="name" type="text">
  {{name}}

  `,
  styles: []
})
export class TwoWayComponent implements OnInit {
  public name="";
  constructor() { }

  ngOnInit() {
  }

}
