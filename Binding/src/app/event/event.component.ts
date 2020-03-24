import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
  <h1 [ngStyle]="eventClor">event binding</h1>
  welcome to {{name}}
  <button (click)="onClik($event)">greek</button>
  <button (click)="greeting='sreenath'">greek</button>
  <h1>{{greeting}}</h1>

  <br><br>
  <br><br>
  <h1>Simple example of template referance</h1>
  <input #myid type="text">
<button (click)="message(myid.value)">log</button>
  `,
  styles: [``]
})
export class EventComponent implements OnInit {
  public name = "iam the code";
  public eventClor={
    color:"pink",
    fontStyle: "bold"
  }
  public greeting="";
  

  constructor() { }

  ngOnInit() {
  }
  onClik(event)
  {
    console.log(event);
    this.greeting=event.type;
    
  }
  message(value)
  {
    console.log(value);
  }

}
