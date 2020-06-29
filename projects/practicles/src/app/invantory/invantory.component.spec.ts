import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvantoryComponent } from './invantory.component';

describe('InvantoryComponent', () => {
  let component: InvantoryComponent;
  let fixture: ComponentFixture<InvantoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvantoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvantoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
