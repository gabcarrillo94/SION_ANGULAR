import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMain1Component } from './serviceMain1.component';

describe('ServiceMain1Component', () => {
  let component: ServiceMain1Component;
  let fixture: ComponentFixture<ServiceMain1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMain1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
