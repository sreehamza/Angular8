import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item-model';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItem:BudgetItem[];
  @Output() delete: EventEmitter <BudgetItem>=new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit() {
  }

  ondelete(item:BudgetItem){
    this.delete.emit(item);
  }

}
