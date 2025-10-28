import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDraggingComponent } from './disabled-dragging.component';

describe('DisabledDraggingComponent', () => {
  let component: DisabledDraggingComponent;
  let fixture: ComponentFixture<DisabledDraggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledDraggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledDraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
