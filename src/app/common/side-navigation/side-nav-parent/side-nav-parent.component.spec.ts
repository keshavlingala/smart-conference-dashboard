import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavParentComponent } from './side-nav-parent.component';

describe('SideNavParentComponent', () => {
  let component: SideNavParentComponent;
  let fixture: ComponentFixture<SideNavParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
