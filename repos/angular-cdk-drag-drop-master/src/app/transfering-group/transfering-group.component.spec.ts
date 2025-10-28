import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferingGroupComponent } from './transfering-group.component';

describe('TransferingGroupComponent', () => {
  let component: TransferingGroupComponent;
  let fixture: ComponentFixture<TransferingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
