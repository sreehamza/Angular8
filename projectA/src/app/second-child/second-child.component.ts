import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Firsttask } from '../classes/Firsttask';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  @Input() s1:any;
  @Input('addBtnState') disableAddBtn: boolean;
  @Input('saveBtnState') disableSaveBtn: boolean;
  @Output() public saveEvent = new EventEmitter();
  @Output() public addEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  add(){
    this.addEvent.emit(this.s1);
   
  }
  save(){
    this.saveEvent.emit(this.s1);
    this.s1 = new Firsttask();
    if(this.disableSaveBtn==true) {
      this.disableSaveBtn=false;
      this.disableSaveBtn=true;
     }
     else{
      this.disableAddBtn=true;
      this.disableAddBtn=false;
      this.disableSaveBtn=true;
     }
  }

}
