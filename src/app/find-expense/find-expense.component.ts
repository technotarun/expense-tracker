import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { GetExpenseService } from '../app-service/get-expense.service';
import { DeleteExpenseService } from '../app-service/delete-expense.service';
import { NgForm } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

export interface PeriodicElement {
  selection: any;
  id: number;
  description: string;
  category: string;
  amount: number;
  added_date: Date;
}


@Component({
  selector: 'app-find-expense',
  templateUrl: './find-expense.component.html',
  styleUrls: ['./find-expense.component.css']
})
export class FindExpenseComponent implements OnInit {

  constructor(private getExpenseService: GetExpenseService, private deleteExpenseService: DeleteExpenseService, public dialog: MatDialog) { }
  
  checked = false;
  isLoaderVisible: boolean = false;
  formDataStore: any;
  selectedIds: string[] = [];
  displayedColumns: string[] = ['select', 'id', 'description', 'category', 'amount', 'added_date'];
  response: any;
  ELEMENT_DATA: Element[] = [];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(NgForm) myForm: NgForm;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onGetExpense(f: NgForm) {
    this.isLoaderVisible = true;
    this.formDataStore = f.value;
    this.getExpenseServiceData(this.formDataStore);
  }

  getExpenseServiceData(formData) {
    this.getExpenseService.getExpense(formData).subscribe(data => {
      this.response = data.data;
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoaderVisible = false;
    });
  }

  deleteExpenseData() {
    this.isLoaderVisible = true;

    this.selectedIds = this.selection.selected.map(function(val) {
      return val.id;
    });

    this.deleteExpenseService.removeExpense(this.selectedIds).subscribe(data => {
      this.getExpenseServiceData(this.formDataStore);
      this.selection.clear();
    });
  }

  editExpense(): void {
    console.log(this.selection.selected[0]);
    let dataToUpdate = this.selection.selected[0];
    
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '500px',
      data: dataToUpdate
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit() {
  }

}