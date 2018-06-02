import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NClassfiyComponent } from './n-classfiy.component';

describe('NClassfiyComponent', () => {
  let component: NClassfiyComponent;
  let fixture: ComponentFixture<NClassfiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NClassfiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NClassfiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
