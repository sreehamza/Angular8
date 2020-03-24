import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {
  a:number;
  vl: string;

  constructor() { 
    this.vl = '';
  }

  getvalue(){
        console.log(this.vl);
    return this.vl;
  }
  setValue(val){
    this.vl=val;
    console.log(this.vl);
  }
}

