import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStaggeredAnimations1Component } from './angular-staggered-animations1.component';

describe('AngularStaggeredAnimations1Component', () => {
  let component: AngularStaggeredAnimations1Component;
  let fixture: ComponentFixture<AngularStaggeredAnimations1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStaggeredAnimations1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStaggeredAnimations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
