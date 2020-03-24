import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  adrress = new FormGroup({
    HouseNumber : new FormControl(''),
    HouseName : new FormControl(''),
    Street : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  clear(){
    this.adrress.get('HouseNumber').setValue('');
    this.adrress.get('HouseName').setValue('');
    this.adrress.get('Street').setValue('');
    
  }
}
