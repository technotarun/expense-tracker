import { TestBed, inject } from '@angular/core/testing';

import { GetExpenseService } from './get-expense.service';

describe('GetExpenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetExpenseService]
    });
  });

  it('should be created', inject([GetExpenseService], (service: GetExpenseService) => {
    expect(service).toBeTruthy();
  }));
});
