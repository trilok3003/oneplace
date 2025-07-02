import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularListenToWindowComponent } from './angular-listen-to-window.component';

describe('AngularListenToWindowComponent', () => {
  let component: AngularListenToWindowComponent;
  let fixture: ComponentFixture<AngularListenToWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularListenToWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularListenToWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
