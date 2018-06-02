import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VClassifyComponent } from './v-classify.component';

describe('VClassifyComponent', () => {
  let component: VClassifyComponent;
  let fixture: ComponentFixture<VClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
