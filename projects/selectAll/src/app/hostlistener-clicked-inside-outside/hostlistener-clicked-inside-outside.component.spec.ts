import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerClickedInsideOutsideComponent } from './hostlistener-clicked-inside-outside.component';

describe('HostlistenerClickedInsideOutsideComponent', () => {
  let component: HostlistenerClickedInsideOutsideComponent;
  let fixture: ComponentFixture<HostlistenerClickedInsideOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerClickedInsideOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerClickedInsideOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
