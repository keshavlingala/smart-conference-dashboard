import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceTypeFormComponent } from './add-device-type-form.component';

describe('AddDeviceTypeFormComponent', () => {
  let component: AddDeviceTypeFormComponent;
  let fixture: ComponentFixture<AddDeviceTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
