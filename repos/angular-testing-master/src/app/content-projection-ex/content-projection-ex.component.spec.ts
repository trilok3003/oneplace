import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionExComponent } from './content-projection-ex.component';

describe('ContentProjectionExComponent', () => {
  let component: ContentProjectionExComponent;
  let fixture: ComponentFixture<ContentProjectionExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
