import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV4Component } from './progress-v4.component';

describe('ProgressV4Component', () => {
  let component: ProgressV4Component;
  let fixture: ComponentFixture<ProgressV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
