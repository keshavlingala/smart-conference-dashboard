import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateKeysHomeComponent } from './generate-keys-home.component';

describe('GenerateKeysHomeComponent', () => {
  let component: GenerateKeysHomeComponent;
  let fixture: ComponentFixture<GenerateKeysHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateKeysHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateKeysHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
