import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseChartComponent } from './expense-chart.component';

describe('ExpenseChartComponent', () => {
  let component: ExpenseChartComponent;
  let fixture: ComponentFixture<ExpenseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
