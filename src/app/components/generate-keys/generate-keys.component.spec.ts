import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateKeysComponent } from './generate-keys.component';

describe('GenerateKeysComponent', () => {
  let component: GenerateKeysComponent;
  let fixture: ComponentFixture<GenerateKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
