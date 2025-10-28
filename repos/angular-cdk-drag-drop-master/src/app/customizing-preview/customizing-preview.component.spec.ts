import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizingPreviewComponent } from './customizing-preview.component';

describe('CustomizingPreviewComponent', () => {
  let component: CustomizingPreviewComponent;
  let fixture: ComponentFixture<CustomizingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizingPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
