import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VContentComponent } from './v-content.component';

describe('VContentComponent', () => {
  let component: VContentComponent;
  let fixture: ComponentFixture<VContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
