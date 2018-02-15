import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMain2Component } from './serviceMain2.component';

describe('ServiceMain1Component', () => {
  let component: ServiceMain2Component;
  let fixture: ComponentFixture<ServiceMain2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMain2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
