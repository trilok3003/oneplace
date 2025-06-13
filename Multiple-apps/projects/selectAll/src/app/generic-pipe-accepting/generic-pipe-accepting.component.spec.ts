import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPipeAcceptingComponent } from './generic-pipe-accepting.component';

describe('GenericPipeAcceptingComponent', () => {
  let component: GenericPipeAcceptingComponent;
  let fixture: ComponentFixture<GenericPipeAcceptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPipeAcceptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPipeAcceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
