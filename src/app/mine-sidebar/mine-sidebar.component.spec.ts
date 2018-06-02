import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineSidebarComponent } from './mine-sidebar.component';

describe('MineSidebarComponent', () => {
  let component: MineSidebarComponent;
  let fixture: ComponentFixture<MineSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
