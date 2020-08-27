import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaTimelineComponent } from './ota-timeline.component';

describe('OtaTimelineComponent', () => {
  let component: OtaTimelineComponent;
  let fixture: ComponentFixture<OtaTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
