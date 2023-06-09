import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-children',
  templateUrl: './product-children.component.html',
  styleUrls: ['./product-children.component.scss']
})
export class ProductChildrenComponent {
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
