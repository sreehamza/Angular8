import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  title: string;
  A: boolean;
  cars: any;
  numbers: any;
  s1: Student;
  students: any;
  total:any;
  

  constructor() {
    this.students = [
      new Student(1, 'abhi', [60, 89, 65]),
      new Student(2, 'sabhi', [66, 79, 65]),
      new Student(3, 'sibhi', [66, 89, 65])
    ];

     for (let i = 0; i < this.students.length; i++) {
       console.log("value of i====="+i);
       for (let j = 0; j < this.students[i].mark.length; j++) {
         console.log("value of j"+j);
         this.students[i].total += this.students[i].mark[j];
          console.log("hhhh"+this.students[i].total);
      }
     }

    // this.students.forEach(element => {
    //   console.log(element);
    //   element.total = element.mark[0] +  element.mark[1] + element.mark[3];
    // });
    // for(let i = 0; i< this.students.length; i++){
    //   for(let j = 0; j< this.students[i].mark.length; j++){
    //     // console.log(this.students[i].mark[j]);
    //     this.students[i].total = this.students[i].this.mark[j];
    //     console.log(this.students[i].total);
    //   }
    //   // this.students[i].total = this.students[i].mark[0] + this.students[i].mark[1] +this.students[i].mark[2]
    // }
    // console.log(this.students);
    // this.s1=new Student(3,'rahul',70);
    this.title = 'Hellow world';
    this.A = true;
    this.cars = ['bmw', 'benz', 'maruthi'];
    this.numbers = [1, 20, 65, 30, 4];
    // console.log(this.numbers);
    // this.s1.id=2;
    // this.s1.name='sreenath';
    // this.s1.mark=60;
  }

  ngOnInit() {
  }

}
