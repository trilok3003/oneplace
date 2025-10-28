import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarStylingComponent } from './scrollbar-styling.component';

describe('ScrollbarStylingComponent', () => {
  let component: ScrollbarStylingComponent;
  let fixture: ComponentFixture<ScrollbarStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollbarStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbarStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
