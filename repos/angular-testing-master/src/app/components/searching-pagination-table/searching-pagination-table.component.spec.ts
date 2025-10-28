import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingPaginationTableComponent } from './searching-pagination-table.component';

describe('SearchingPaginationTableComponent', () => {
  let component: SearchingPaginationTableComponent;
  let fixture: ComponentFixture<SearchingPaginationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingPaginationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingPaginationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
