import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/common/product';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent {
  // products: Products[];

  // constructor(private productService: ProductService) {
  //   this.products=[]
  // }

  // ngOnInit() {
  //     this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
  // }

  // getSeverity(status: string): string {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //     default:
  //       return '';
  //   }
  // }

  // getStatusSeverity(status: string): string {
  //   switch (status) {
  //     case 'PENDING':
  //       return 'warning';
  //     case 'DELIVERED':
  //       return 'success';
  //     case 'CANCELLED':
  //       return 'danger';
  //     default:
  //       return '';
  //   }
  // }
}
