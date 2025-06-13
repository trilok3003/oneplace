import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStaggeredAnimationsComponent } from './angular-staggered-animations.component';

describe('AngularStaggeredAnimationsComponent', () => {
  let component: AngularStaggeredAnimationsComponent;
  let fixture: ComponentFixture<AngularStaggeredAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStaggeredAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStaggeredAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
