import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-controler',
  templateUrl: './form-controler.component.html',
  styleUrls: ['./form-controler.component.scss']
})
export class FormControlerComponent implements OnInit {

  name = new FormControl('');
  profileform = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  update(){
    this.name.setValue('');
    this.profileform.get('firstname').setValue('');
    console.log(this.profileform.pristine);
    
  }

}
