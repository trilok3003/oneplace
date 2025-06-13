import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerDocumentKeyupEventComponent } from './hostlistener-document-keyup-event.component';

describe('HostlistenerDocumentKeyupEventComponent', () => {
  let component: HostlistenerDocumentKeyupEventComponent;
  let fixture: ComponentFixture<HostlistenerDocumentKeyupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerDocumentKeyupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerDocumentKeyupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
