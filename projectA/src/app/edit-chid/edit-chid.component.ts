import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Firsttask } from '../classes/Firsttask';


@Component({
  selector: 'app-edit-chid',
  templateUrl: './edit-chid.component.html',
  styleUrls: ['./edit-chid.component.scss']
})
export class EditChidComponent implements OnInit {

  @Input('addBtnState') disableAddBtn: boolean;
  @Input('saveBtnState') disableSaveBtn: boolean;
  @Input() stdnt: any;
  @Output() public saveEvent = new EventEmitter();
  @Output() public addEvent = new EventEmitter();


  constructor() {

   }

  ngOnInit() {
  }
  add(){

    this.addEvent.emit(this.stdnt)
    

  }
  save(){
    this.saveEvent.emit(this.stdnt);
    this.stdnt = new Firsttask();
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