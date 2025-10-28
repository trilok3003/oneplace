import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressV6Component } from './progress-v6.component';

describe('ProgressV6Component', () => {
  let component: ProgressV6Component;
  let fixture: ComponentFixture<ProgressV6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressV6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
