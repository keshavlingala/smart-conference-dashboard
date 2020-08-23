import { TestBed } from '@angular/core/testing';

import { SideNavigationGuard } from './side-navigation.guard';

describe('SideNavigationGuard', () => {
  let guard: SideNavigationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SideNavigationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
