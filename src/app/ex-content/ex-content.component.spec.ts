import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExContentComponent } from './ex-content.component';

describe('ExContentComponent', () => {
  let component: ExContentComponent;
  let fixture: ComponentFixture<ExContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
