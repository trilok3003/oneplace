import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGridSortingComponent } from './angular-grid-sorting.component';

describe('AngularGridSortingComponent', () => {
  let component: AngularGridSortingComponent;
  let fixture: ComponentFixture<AngularGridSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGridSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGridSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
