import { TestBed } from '@angular/core/testing';

import { DataTableService } from './data.service';

describe('DataService', () => {
  let service: DataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
