import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductMaleComponent } from './admin-product-male.component';

describe('AdminProductMaleComponent', () => {
  let component: AdminProductMaleComponent;
  let fixture: ComponentFixture<AdminProductMaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductMaleComponent]
    });
    fixture = TestBed.createComponent(AdminProductMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
