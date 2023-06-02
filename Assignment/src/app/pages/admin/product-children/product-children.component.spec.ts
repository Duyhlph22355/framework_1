import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChildrenComponent } from './product-children.component';

describe('ProductChildrenComponent', () => {
  let component: ProductChildrenComponent;
  let fixture: ComponentFixture<ProductChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductChildrenComponent]
    });
    fixture = TestBed.createComponent(ProductChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
