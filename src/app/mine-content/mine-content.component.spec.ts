import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineContentComponent } from './mine-content.component';

describe('MineContentComponent', () => {
  let component: MineContentComponent;
  let fixture: ComponentFixture<MineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
