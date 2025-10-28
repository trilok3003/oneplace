import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizingPlaceholderComponent } from './customizing-placeholder.component';

describe('CustomizingPlaceholderComponent', () => {
  let component: CustomizingPlaceholderComponent;
  let fixture: ComponentFixture<CustomizingPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizingPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizingPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
