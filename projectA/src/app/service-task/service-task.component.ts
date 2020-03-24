import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../service-task.service';

@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.scss']
})
export class ServiceTaskComponent implements OnInit {

  name:string
  constructor(public serv: ServiceTaskService) { 
    this.name = "";
  }

  ngOnInit() {
  }
  add(){
    this.serv.setValue(this.name);
  }
}
