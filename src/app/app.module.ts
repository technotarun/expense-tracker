import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FindExpenseComponent } from './find-expense/find-expense.component';
import { ExpenseChartComponent } from './expense-chart/expense-chart.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    FindExpenseComponent,
    ExpenseChartComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpModule,
    GoogleChartsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [ ModalDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
