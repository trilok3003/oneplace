import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledSortingComponent } from './disabled-sorting.component';

describe('DisabledSortingComponent', () => {
  let component: DisabledSortingComponent;
  let fixture: ComponentFixture<DisabledSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
