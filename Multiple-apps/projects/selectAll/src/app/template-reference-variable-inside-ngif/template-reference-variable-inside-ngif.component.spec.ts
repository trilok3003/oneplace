import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariableInsideNgifComponent } from './template-reference-variable-inside-ngif.component';

describe('TemplateReferenceVariableInsideNgifComponent', () => {
  let component: TemplateReferenceVariableInsideNgifComponent;
  let fixture: ComponentFixture<TemplateReferenceVariableInsideNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVariableInsideNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVariableInsideNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
