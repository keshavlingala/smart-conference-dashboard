import { TestBed } from '@angular/core/testing';

import { DevicesTypeService } from './devices-type.service';

describe('DevicesTypeService', () => {
  let service: DevicesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
