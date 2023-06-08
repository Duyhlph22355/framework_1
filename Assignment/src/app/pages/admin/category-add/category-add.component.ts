import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  productForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(255)],
    ],
    price: [0, [Validators.required, Validators.min(0)]],
    desc: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(255)],
    ],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductsService
  ) {}
  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      desc : '',
    };

    this.productService.addProduct(product).subscribe(
      (product) => {
        alert(`Thêm sản phẩm thành công: ${product.name}`);
      },
      (error) => {
        alert(`Thêm sản phẩm thất bại: ${error.message}`);
      }
    );
  }
}
