import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NContentComponent } from './n-content.component';

describe('NContentComponent', () => {
  let component: NContentComponent;
  let fixture: ComponentFixture<NContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
