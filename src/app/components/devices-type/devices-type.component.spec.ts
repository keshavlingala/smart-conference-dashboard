import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesTypeComponent } from './devices-type.component';

describe('DevicesTypeComponent', () => {
  let component: DevicesTypeComponent;
  let fixture: ComponentFixture<DevicesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
