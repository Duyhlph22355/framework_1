import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    name: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    imgUrl: ['', [Validators.required]],
    size: ['', [Validators.required]],
    category: [2],
    color: ['', [Validators.required]]
  });
  CategoryList: ICategories[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router,

  ) {

  }
  get validate(){
    return this.productForm.controls
  }
  ngOnInit(){
    this.categoriesService.getCategories().subscribe((data:any) => {
      this.CategoryList = data
    })
  }
  onHandleSubmit() {
    console.log(this.productForm.value);

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
    console.log(this.productForm.value.category);

    this.productService.addProduct(product).subscribe((product) => {
      alert(`Thêm sản phẩm thành công: ${product.name}`);
      this.router.navigate(['/admin/home'])
    });
  }
}
}
