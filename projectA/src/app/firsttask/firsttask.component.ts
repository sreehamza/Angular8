import { Component, OnInit } from '@angular/core';
import { Firsttask } from '../classes/Firsttask';
import { ServiceTaskService } from '../service-task.service';

@Component({
  selector: 'app-firsttask',
  templateUrl: './firsttask.component.html',
  styleUrls: ['./firsttask.component.scss']
})
export class FirsttaskComponent implements OnInit {

  students: any;
  total: number;
  task: any;
  s1: Firsttask;
  index:number
  disableAddBtn: boolean;
  disableSaveBtn: boolean;
  b:string;

  constructor(public serviceTsk: ServiceTaskService) {
    
    this.students = [
      new Firsttask(1, 'abhi', [60, 89, 65]),
      new Firsttask(2, 'sabhi', [66, 79, 65]),
      new Firsttask(3, 'sibhi', [66, 89, 65])
    ];
    this.s1 = new Firsttask();
    
    this.disableSaveBtn = false;
    this.disableAddBtn = false;

    for (let i = 0; i < this.students.length; i++) {
      this.students[i].total = 0;
      for (let j = 0; j < this.students[i].mark.length; j++) {
        this.students[i].total += this.students[i].mark[j];

      }

    }
    this.task = 12;
  }

  ngOnInit() {
  }
  add() {
    this.students.push(this.s1);

    if(this.disableAddBtn==true){
      this.disableAddBtn=true;
    }
    else{
      this.disableSaveBtn=false;
    }
   
    this.s1 = new Firsttask();
  }
  editStudentDetails(index:number){
    console.log(index);
    this.index = index;
    console.log(this.students[index]);
    this.s1 = this.students[index];

  //  if(this.disableAddBtn==true) {
  //   this.disableAddBtn=true;
  //  }
  //  else{
     this.disableSaveBtn=false;
  //    this.disableAddBtn=true;
  //  }
   
  }
  saveParant(event: any){
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
  addstate(event: any){
    this.students.push(event);

    if(this.disableAddBtn==true){
      this.disableAddBtn=true;
    }
    else{
      this.disableSaveBtn=false;
    }
   
    this.s1 = new Firsttask();
  }
  // addstate(evnt: any){
  //   console.log(evnt, 'In parent add');
  //   this.students.push(evnt);

  // }
  mesage(evnt: any){
    console.log(evnt, 'In parent save');
    
  }
  // this is the example for the event passing from child to the parent component 
}
