import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddExpenseService } from '../app-service/add-expense.service';


export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})

export class AddExpenseComponent implements OnInit {

  constructor(private addExpenseService: AddExpenseService) { }

  categories: Category[] = [
    {value: 'cat-0', viewValue: 'Housing'},
    {value: 'cat-1', viewValue: 'Transportation'},
    {value: 'cat-2', viewValue: 'Food'},
    {value: 'cat-3', viewValue: 'Utilities'},
    {value: 'cat-4', viewValue: 'Clothing'},
    {value: 'cat-5', viewValue: 'Medical'},
    {value: 'cat-6', viewValue: 'Insurance'},
    {value: 'cat-7', viewValue: 'Household Items/Supplies'},
    {value: 'cat-8', viewValue: 'Personal'},
    {value: 'cat-9', viewValue: 'Debt/Loans'},
    {value: 'cat-10', viewValue: 'Retirement'},
    {value: 'cat-11', viewValue: 'Education'},
    {value: 'cat-12', viewValue: 'Savings'},
    {value: 'cat-13', viewValue: 'Gifts/Donations'},
    {value: 'cat-14', viewValue: 'Entertainment'}
  ];

  @ViewChild(NgForm) myForm: NgForm;

  ngOnInit() {
  }

  onExpenseSubmit(f: NgForm) {
    this.addExpenseService.addExpense(f.value).subscribe(data => {
    });
  }

  onReset(e) {
    e.preventDefault();
    this.myForm.resetForm();
  }

}
