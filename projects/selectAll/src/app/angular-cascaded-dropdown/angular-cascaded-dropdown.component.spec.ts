import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCascadedDropdownComponent } from './angular-cascaded-dropdown.component';

describe('AngularCascadedDropdownComponent', () => {
  let component: AngularCascadedDropdownComponent;
  let fixture: ComponentFixture<AngularCascadedDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCascadedDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCascadedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
