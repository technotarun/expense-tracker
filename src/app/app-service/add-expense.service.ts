import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class AddExpenseService {

  constructor(private http: Http){}

  addExpense(expenseData: any) {
    return this.http.post('http://localhost:3333/api/addexpense', {
      description: expenseData.addDescription,
      category: expenseData.addSelectedCategory,
      added_date: expenseData.addDate,
      amount: expenseData.addAmount
    }).map((res: Response) => res.json());
  }

}
