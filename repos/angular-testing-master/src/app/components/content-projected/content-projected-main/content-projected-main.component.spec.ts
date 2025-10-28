import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectedMainComponent } from './content-projected-main.component';

describe('ContentProjectedMainComponent', () => {
  let component: ContentProjectedMainComponent;
  let fixture: ComponentFixture<ContentProjectedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectedMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
