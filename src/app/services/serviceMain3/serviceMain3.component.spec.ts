import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMain3Component } from './serviceMain3.component';

describe('ServiceMain3Component', () => {
  let component: ServiceMain3Component;
  let fixture: ComponentFixture<ServiceMain3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMain3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMain3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
