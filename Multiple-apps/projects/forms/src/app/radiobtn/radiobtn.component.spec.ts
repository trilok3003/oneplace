import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobtnComponent } from './radiobtn.component';

describe('RadiobtnComponent', () => {
  let component: RadiobtnComponent;
  let fixture: ComponentFixture<RadiobtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
