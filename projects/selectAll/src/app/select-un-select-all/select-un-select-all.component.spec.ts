import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUnSelectAllComponent } from './select-un-select-all.component';

describe('SelectUnSelectAllComponent', () => {
  let component: SelectUnSelectAllComponent;
  let fixture: ComponentFixture<SelectUnSelectAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUnSelectAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUnSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
