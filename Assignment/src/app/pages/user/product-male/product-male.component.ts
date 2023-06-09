import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-male',
  templateUrl: './product-male.component.html',
  styleUrls: ['./product-male.component.scss']
})
export class ProductMaleComponent {
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
