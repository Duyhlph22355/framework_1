import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductChildrenComponent } from './admin-product-children.component';

describe('AdminProductChildrenComponent', () => {
  let component: AdminProductChildrenComponent;
  let fixture: ComponentFixture<AdminProductChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductChildrenComponent]
    });
    fixture = TestBed.createComponent(AdminProductChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
