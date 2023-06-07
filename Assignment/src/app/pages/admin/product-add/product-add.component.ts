import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ICategories } from 'src/app/interface/ICategories';
import { IProduct } from 'src/app/interface/IProduct';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    imgUrl: [''],
    size: [''],
    color: [''],
    category: [0]
  });
  CategoryList: ICategories[] = [];
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) {
    this.categoriesService.getCategories().subscribe((data:any) => {
      this.CategoryList = data
    })
  }
  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      imgUrl: this.productForm.value.imgUrl || '',
      size: this.productForm.value.size || '',
      color: this.productForm.value.color || '',
      category: this.productForm.value.category || 0,

    };

    this.productService.addProduct(product).subscribe((product) => {
      alert(`Thêm sản phẩm thành công: ${product.name}`);
    });
  }
}
