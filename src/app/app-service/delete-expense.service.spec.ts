import { TestBed, inject } from '@angular/core/testing';

import { DeleteExpenseService } from './delete-expense.service';

describe('DeleteExpenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteExpenseService]
    });
  });

  it('should be created', inject([DeleteExpenseService], (service: DeleteExpenseService) => {
    expect(service).toBeTruthy();
  }));
});
