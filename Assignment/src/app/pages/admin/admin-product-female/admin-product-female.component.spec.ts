import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFemaleComponent } from './admin-product-female.component';

describe('AdminProductFemaleComponent', () => {
  let component: AdminProductFemaleComponent;
  let fixture: ComponentFixture<AdminProductFemaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductFemaleComponent]
    });
    fixture = TestBed.createComponent(AdminProductFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
