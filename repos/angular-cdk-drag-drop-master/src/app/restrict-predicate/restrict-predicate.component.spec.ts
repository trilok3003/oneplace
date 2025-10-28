import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictPredicateComponent } from './restrict-predicate.component';

describe('RestrictPredicateComponent', () => {
  let component: RestrictPredicateComponent;
  let fixture: ComponentFixture<RestrictPredicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictPredicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictPredicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
