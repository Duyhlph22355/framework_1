import { Component } from '@angular/core';
import { ICategories } from 'src/app/interface/ICategories';
import { IProduct } from 'src/app/interface/IProduct';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-admin-product-female',
  templateUrl: './admin-product-female.component.html',
  styleUrls: ['./admin-product-female.component.scss']
})
export class AdminProductFemaleComponent {
  products: IProduct[] = [];
  CategoryList: ICategories[] = [];
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService
    ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
    this.categoriesService.getCategories().subscribe((data:any) => {
      this.CategoryList = data
    })
  }

  delete(id: string) {
    const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (confirmed) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
  }
}
