import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationScrollintoviewSmoothComponent } from './navigation-scrollintoview-smooth.component';

describe('NavigationScrollintoviewSmoothComponent', () => {
  let component: NavigationScrollintoviewSmoothComponent;
  let fixture: ComponentFixture<NavigationScrollintoviewSmoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationScrollintoviewSmoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationScrollintoviewSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
