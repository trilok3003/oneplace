import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipeAsServiceComponent } from './angular-pipe-as-service.component';

describe('AngularPipeAsServiceComponent', () => {
  let component: AngularPipeAsServiceComponent;
  let fixture: ComponentFixture<AngularPipeAsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPipeAsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPipeAsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
