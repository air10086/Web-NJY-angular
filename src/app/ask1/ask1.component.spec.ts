import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ask1Component } from './ask1.component';

describe('Ask1Component', () => {
  let component: Ask1Component;
  let fixture: ComponentFixture<Ask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
