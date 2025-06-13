import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfElseComponent } from './nf-else.component';

describe('NfElseComponent', () => {
  let component: NfElseComponent;
  let fixture: ComponentFixture<NfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
