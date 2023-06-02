import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFemaleComponent } from './product-female.component';

describe('ProductFemaleComponent', () => {
  let component: ProductFemaleComponent;
  let fixture: ComponentFixture<ProductFemaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFemaleComponent]
    });
    fixture = TestBed.createComponent(ProductFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
