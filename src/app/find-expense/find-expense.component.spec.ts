import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindExpenseComponent } from './find-expense.component';

describe('FindExpenseComponent', () => {
  let component: FindExpenseComponent;
  let fixture: ComponentFixture<FindExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
