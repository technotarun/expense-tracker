import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GetExpenseService } from '../app-service/get-expense.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>, private getExpenseService: GetExpenseService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateData(data): void {
    this.getExpenseService.updateExpense(data).subscribe(response => {
      console.log(response);
    });
  }

}