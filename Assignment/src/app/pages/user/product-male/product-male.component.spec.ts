import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMaleComponent } from './product-male.component';

describe('ProductMaleComponent', () => {
  let component: ProductMaleComponent;
  let fixture: ComponentFixture<ProductMaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMaleComponent]
    });
    fixture = TestBed.createComponent(ProductMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
