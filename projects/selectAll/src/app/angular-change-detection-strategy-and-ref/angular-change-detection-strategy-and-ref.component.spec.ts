import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChangeDetectionStrategyAndRefComponent } from './angular-change-detection-strategy-and-ref.component';

describe('AngularChangeDetectionStrategyAndRefComponent', () => {
  let component: AngularChangeDetectionStrategyAndRefComponent;
  let fixture: ComponentFixture<AngularChangeDetectionStrategyAndRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularChangeDetectionStrategyAndRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChangeDetectionStrategyAndRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
