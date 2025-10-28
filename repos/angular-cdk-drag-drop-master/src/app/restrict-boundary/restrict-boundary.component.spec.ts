import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictBoundaryComponent } from './restrict-boundary.component';

describe('RestrictBoundaryComponent', () => {
  let component: RestrictBoundaryComponent;
  let fixture: ComponentFixture<RestrictBoundaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictBoundaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictBoundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
