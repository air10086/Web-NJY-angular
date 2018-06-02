import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhiboComponent } from './zhibo.component';

describe('ZhiboComponent', () => {
  let component: ZhiboComponent;
  let fixture: ComponentFixture<ZhiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhiboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
