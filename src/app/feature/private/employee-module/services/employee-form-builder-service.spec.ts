import { TestBed } from '@angular/core/testing';

import { EmployeeFormBuilderService } from './employee-form-builder-service';

describe('EmployeeFormBuilderService', () => {
  let service: EmployeeFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
