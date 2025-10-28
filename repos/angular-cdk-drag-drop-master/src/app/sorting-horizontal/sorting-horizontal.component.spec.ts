import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHorizontalComponent } from './sorting-horizontal.component';

describe('SortingHorizontalComponent', () => {
  let component: SortingHorizontalComponent;
  let fixture: ComponentFixture<SortingHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
