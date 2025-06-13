import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerAsDirectiveComponent } from './hostlistener-as-directive.component';

describe('HostlistenerAsDirectiveComponent', () => {
  let component: HostlistenerAsDirectiveComponent;
  let fixture: ComponentFixture<HostlistenerAsDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerAsDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerAsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
