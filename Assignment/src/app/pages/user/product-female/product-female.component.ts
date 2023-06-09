import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-female',
  templateUrl: './product-female.component.html',
  styleUrls: ['./product-female.component.scss']
})
export class ProductFemaleComponent {
  products: IProduct[] = [];
  constructor(
    private productService: ProductsService,
    ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
}
