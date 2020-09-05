import { TestBed } from '@angular/core/testing';

import { DevicesGroupService } from './devices-group.service';

describe('DevicesGroupService', () => {
  let service: DevicesGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
