import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaCardsComponent } from './ota-cards.component';

describe('OtaCardsComponent', () => {
  let component: OtaCardsComponent;
  let fixture: ComponentFixture<OtaCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
