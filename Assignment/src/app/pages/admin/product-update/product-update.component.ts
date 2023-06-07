import { Component } from '@angular/core';
import { ICategories } from 'src/app/interface/ICategories';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product!: IProduct;
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
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: ActivatedRoute,
    private categoriesService: CategoriesService

  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(
        (data) => {
          console.log(data);
          this.product = data;

          this.productForm.patchValue({
            name: data.name,
            price: data.price,
            imgUrl: data.imgUrl,
            size: data.size,
            color: data.color,
            category: data.category,
          });
        },
        (error) => console.log(error.message)
      );
    });
    this.categoriesService.getCategories().subscribe((data:any) => {
      this.CategoryList = data
    })
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: '',
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        imgUrl: this.productForm.value.imgUrl || '',
        size: this.productForm.value.size || '',
        color: this.productForm.value.color || '',
        category: this.productForm.value.category || 0,

      };

      this.productService.updateProduct(product).subscribe((product) => {
        alert(`Cập nhật sản phẩm thành công!!!`);
        console.log(product);
      });
    }

  }
}
