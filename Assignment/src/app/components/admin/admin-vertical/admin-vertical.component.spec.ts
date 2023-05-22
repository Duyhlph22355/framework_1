import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerticalComponent } from './admin-vertical.component';

describe('AdminVerticalComponent', () => {
  let component: AdminVerticalComponent;
  let fixture: ComponentFixture<AdminVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVerticalComponent]
    });
    fixture = TestBed.createComponent(AdminVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
