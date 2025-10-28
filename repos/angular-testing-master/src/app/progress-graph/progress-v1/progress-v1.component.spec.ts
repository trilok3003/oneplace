import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV1Component } from './progress-v1.component';

describe('ProgressV1Component', () => {
  let component: ProgressV1Component;
  let fixture: ComponentFixture<ProgressV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
