import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateFormComponent } from './new-update-form.component';

describe('NewUpdateFormComponent', () => {
  let component: NewUpdateFormComponent;
  let fixture: ComponentFixture<NewUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
