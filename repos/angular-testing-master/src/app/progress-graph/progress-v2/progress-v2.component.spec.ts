import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV2Component } from './progress-v2.component';

describe('ProgressV2Component', () => {
  let component: ProgressV2Component;
  let fixture: ComponentFixture<ProgressV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
