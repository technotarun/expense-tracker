import { TestBed, inject } from '@angular/core/testing';

import { AddExpenseService } from './add-expense.service';

describe('AppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddExpenseService]
    });
  });

  it('should be created', inject([AddExpenseService], (service: AddExpenseService) => {
    expect(service).toBeTruthy();
  }));
});
