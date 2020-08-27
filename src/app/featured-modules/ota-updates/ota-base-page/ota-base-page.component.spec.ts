import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaBasePageComponent } from './ota-base-page.component';

describe('OtaBasePageComponent', () => {
  let component: OtaBasePageComponent;
  let fixture: ComponentFixture<OtaBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaBasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
