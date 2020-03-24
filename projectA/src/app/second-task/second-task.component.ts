import { Component, OnInit } from '@angular/core';
import { SecondTask } from '../classes/secondtask';
import { Firsttask } from '../classes/Firsttask';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss']
})
export class SecondTaskComponent implements OnInit {

  students: any;
  objst: Firsttask;
  total: number;
  disableSaveBtn: boolean;
  disableAddBtn: boolean;


  constructor() {
    this.students = [
      // new Firsttask(1, 'rahul', [12, 20, 30]),
      // new Firsttask(2, 'mijin', [12, 40, 30])
    ];
    this.objst = new Firsttask();
    this.disableSaveBtn = false;
    this.disableAddBtn = false;
    
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].total = 0;
      for (let j = 0; j < this.students[i].mark.length; j++) {
        this.students[i].total += this.students[i].mark[j];
      }
    }
  }

  ngOnInit() {
  }

  editStudentDetails(index: number) {
    console.log(index);
    console.log(this.students[index]);
    this.objst = this.students[index];

    if (this.disableAddBtn == true) {
      this.disableAddBtn = true;
    }
    else {
      this.disableSaveBtn = false;
      this.disableAddBtn = true;
    }

  }
  saveParant(event: any) {
    this.objst = new Firsttask();

    if (this.disableSaveBtn == true) {
      this.disableSaveBtn = false;
      this.disableSaveBtn = true;
    }
    else {
      this.disableAddBtn = true;
      this.disableAddBtn = false;
      this.disableSaveBtn = true;
    }
  }
  addstate(event: any) {
    this.students.push(event);

    if (this.disableAddBtn == true) {
      this.disableAddBtn = true;
    }
    else {
      this.disableSaveBtn = false;
    }

    this.objst = new Firsttask();
  }
}
