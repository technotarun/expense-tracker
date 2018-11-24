import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GetExpenseService {

  constructor(private http: Http) { }

  formatDate(value)
  {
    return value.getMonth() + 1 + "-" + value.getDate() + "-" + value.getFullYear();
  }

  getExpense(formData) {
    var fromdate = this.formatDate(formData['fromDate']);
    var todate = this.formatDate(formData['toDate']);

    return this.http.get('http://localhost:3333/api/getexpense/' + fromdate + "/" + todate).map((res: Response) => res.json());
  }

  getAllExpense() {
    return this.http.get('http://localhost:3333/api/getallexpense/').map((res: Response) => res.json());
  }

  getExpenseForDateRange(formData) {
    var fromdate = this.formatDate(formData['fromDate']);
    var todate = this.formatDate(formData['toDate']);

    return this.http.get('http://localhost:3333/api/getexpense/daterange/' + fromdate + "/" + todate).map((res: Response) => res.json());
  }

  updateExpense(expenseData: any) {
    return this.http.put('http://localhost:3333/api/updateexpense/' + expenseData.id, {
      id: expenseData.id,
      description: expenseData.description,
      category: expenseData.category,
      added_date: expenseData.added_date,
      amount: expenseData.amount
    }).map((res: Response) => res.json());
  }
}
