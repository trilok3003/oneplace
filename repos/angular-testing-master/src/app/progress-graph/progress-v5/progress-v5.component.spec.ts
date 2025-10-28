import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV5Component } from './progress-v5.component';

describe('ProgressV5Component', () => {
  let component: ProgressV5Component;
  let fixture: ComponentFixture<ProgressV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
