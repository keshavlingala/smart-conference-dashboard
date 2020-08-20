import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleHomeComponent } from './rule-home.component';

describe('RuleHomeComponent', () => {
  let component: RuleHomeComponent;
  let fixture: ComponentFixture<RuleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
