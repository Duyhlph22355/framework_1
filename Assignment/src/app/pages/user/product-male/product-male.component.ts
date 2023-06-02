import { Component } from '@angular/core';
import { Product, Products } from 'src/app/common/product';

@Component({
  selector: 'app-product-male',
  templateUrl: './product-male.component.html',
  styleUrls: ['./product-male.component.scss']
})
export class ProductMaleComponent {
  // layout: 'list' | 'grid' = 'list';


  //   products: Products[];

  //   constructor(private productService: ProductService) {
  //     this.products = [];
  //     if (this.layout !== 'list' && this.layout !== 'grid') {
  //       this.layout = 'list';
  //     }
  //   }

  //   ngOnInit() {
  //       this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
  //   }

  //   getSeverity (product: any): string | undefined {
  //       switch (product.inventoryStatus) {
  //           case 'INSTOCK':
  //               return 'success';

  //           case 'LOWSTOCK':
  //               return 'warning';

  //           case 'OUTOFSTOCK':
  //               return 'danger';

  //           default:
  //               return undefined;
  //       }
  //   };
  show = {}
  show_product (product: Product) {
    this.show = product
  }
  products: Product[] = [
    {
      id: '1',
      name: 'Quần Jean',
      price: 100,
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      imgUrl:
        'https://laforce.vn/wp-content/uploads/2022/07/phoi-do-voi-quan-jean-ong-suong-mua-dong.jpg',
    },
    {
      id: '2',
      name: 'Áo Phông',
      price: 200,
      description: 'lorem ipsum',
      imgUrl:
        'https://mayvinhthanh.vn/wp-content/uploads/2021/03/pasted-image-0.png',
    },
    {
      id: '3',
      name: 'Áo Sơ Mi Nam Cộc Tay Kẻ Bambo',
      price: 300,
      description:
        'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
      imgUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/scm5049-kde-10.jpg?v=1677142082000',
    },
    {
      id: '4',
      name: 'Áo Polo Nam Pique Sồi',
      price: 350,
      description:
        'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
      imgUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm5393-xhd-3.jpg?v=1662358179000',
    },
    {
      id: '5',
      name: 'Áo Vest Nam Nano Công Sở Trẻ Trung',
      price: 1150,
      description:
        'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
      imgUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/vem4007-xnh-2.jpg?v=1666153948000',
    },
    {
      id: '6',
      name: 'Áo T-Shirt Nam Cotton USA Phiên Bản Premium',
      price: 160,
      description:
        'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
      imgUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/tsm5231-vag-3.jpg?v=1652520442000',
    },
    {
      id: '7',
      name: 'Áo Thun Nam Dập Chữ Nổi Cotton Usa',
      price: 235,
      description:
        'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
      imgUrl:
        'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/tsm6095-dn1-13.jpg?v=1684830777000',
    },

  ];
}
