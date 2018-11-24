import { Component, OnInit, ViewChild } from '@angular/core';
import { GetExpenseService } from '../app-service/get-expense.service';
import { NgForm } from '@angular/forms';
import { GoogleCharts } from 'google-charts';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.css']
})
export class ExpenseChartComponent implements OnInit {
  response: any;
  item: any[] = [];
  allData: any[] = [];
  isLoaderVisible: boolean = false;
  chartDataDateRnge: any[] = [];

  constructor(private getExpenseService: GetExpenseService) { }

  @ViewChild(NgForm) myForm: NgForm;

  drawChart(chartDataDateRnge) {
    const data = GoogleCharts.api.visualization.arrayToDataTable(chartDataDateRnge);
    const options = {
      is3D: true,
      width: 800,
      height: 600
    };
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
    pie_1_chart.draw(data, options);
  }

  onGetExpense() {
    this.getExpenseService.getAllExpense().subscribe(data => {
      this.response = data.data;
      for (let i = 0; i < this.response.length; i++) {
        this.item.push(this.response[i].category);
        this.item.push(Number(this.response[i].sum));
        this.allData.push(this.item);
        this.item = [];
      }
      this.allData.unshift(['Chart heading', 'Chart amount']);
      GoogleCharts.load(this.drawChart.bind(null, this.allData));
    });
  }

  onGetExpenseForDateRange(f: NgForm) {
    this.isLoaderVisible = true;
    this.allData = [];
    this.getExpenseService.getExpenseForDateRange(f.value).subscribe(data => {
      this.response = data.data;
      for (let i = 0; i < this.response.length; i++) {
        this.item.push(this.response[i].category);
        this.item.push(Number(this.response[i].sum));
        this.allData.push(this.item);
        this.chartDataDateRnge = this.allData;
        this.item = [];
      }
      this.isLoaderVisible = false;
      this.chartDataDateRnge.unshift(['Chart heading', 'Chart amount']);
      GoogleCharts.load(this.drawChart.bind(null, this.chartDataDateRnge));
    },
  
  );
  }

  ngOnInit() {
    this.onGetExpense();
  }

}
