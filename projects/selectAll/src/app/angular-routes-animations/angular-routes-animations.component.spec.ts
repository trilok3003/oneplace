import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutesAnimationsComponent } from './angular-routes-animations.component';

describe('AngularRoutesAnimationsComponent', () => {
  let component: AngularRoutesAnimationsComponent;
  let fixture: ComponentFixture<AngularRoutesAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRoutesAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRoutesAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
