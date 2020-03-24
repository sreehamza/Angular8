import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/model/budget-item-model';


@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {

  @Input() item:BudgetItem=new BudgetItem('',null);
  @Output() formSubmit:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(forms:NgForm){
    this.formSubmit.emit(forms.value);
  }

}
