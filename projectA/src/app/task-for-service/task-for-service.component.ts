import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../service-task.service';

@Component({
  selector: 'app-task-for-service',
  templateUrl: './task-for-service.component.html',
  styleUrls: ['./task-for-service.component.scss']
})
export class TaskForServiceComponent implements OnInit {

  constructor(public serv: ServiceTaskService) { }

  ngOnInit() {
  }
  getFromServ(){
  console.log(this.serv.getvalue());
   
  }
}
