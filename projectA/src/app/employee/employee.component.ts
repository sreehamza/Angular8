import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee: any;
  meg: string;
  sum: boolean;
  value: any;
  total:any;

  constructor() { 
    this.employee=[
      new Employee(1,"sree","mca",[10000,2000,3000]),
      new Employee(2,"reed","mma",[20000,1000,3000]),
      new Employee(1,"sree","mca",[40000,1000,300]),
      new Employee(2,"reed","mma",[70000,2000,3000])
    ];
    this.meg='sreenath';
    // this.value=alert('demo');
    for(let i=0; i<this.employee.length; i++){
      for(let j=0; j<this.employee[i].salary.length; j++){
        this.employee[i].total += this.employee[i].salary[j];
      }
    }
  }

  ngOnInit() {
  }
  change1(event: any){
    // this.value=event.demo;
    console.log(event);
  }
}
