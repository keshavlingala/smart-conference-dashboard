import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesGroupComponent } from './devices-group.component';

describe('DevicesGroupComponent', () => {
  let component: DevicesGroupComponent;
  let fixture: ComponentFixture<DevicesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
