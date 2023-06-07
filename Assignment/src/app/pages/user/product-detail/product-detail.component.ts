import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productService.getProductById(id).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => console.log(error.message)
      );
    });
  }
}
