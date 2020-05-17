import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWaysOfEventBindingComponent } from './angular-ways-of-event-binding.component';

describe('AngularWaysOfEventBindingComponent', () => {
  let component: AngularWaysOfEventBindingComponent;
  let fixture: ComponentFixture<AngularWaysOfEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWaysOfEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWaysOfEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
