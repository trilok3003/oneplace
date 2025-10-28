import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV3Component } from './progress-v3.component';

describe('ProgressV3Component', () => {
  let component: ProgressV3Component;
  let fixture: ComponentFixture<ProgressV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
