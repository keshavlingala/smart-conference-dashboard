import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaUpdatesComponent } from './ota-updates.component';

describe('OtaUpdatesComponent', () => {
  let component: OtaUpdatesComponent;
  let fixture: ComponentFixture<OtaUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
