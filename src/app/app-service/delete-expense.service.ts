import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DeleteExpenseService {

  constructor(private http: Http) { }

  removeExpense(expenseIds: any) {
    return this.http.delete(`http://localhost:3333/api/deleteexpense/${expenseIds}`).map((res: Response) => res.json());
  }
}
