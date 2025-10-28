import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectedComponent } from './content-projected.component';

describe('ContentProjectedComponent', () => {
  let component: ContentProjectedComponent;
  let fixture: ComponentFixture<ContentProjectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
