import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  show = {}
  show_product (product: Product) {
    this.show = product
  }
  products: Product[] = [
    {
      id: '1',
      name: 'Mũ',
      price: 100,
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      imgUrl:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/b5_75.jpg',
    },
    {
      id: '2',
      name: 'Áo Phông',
      price: 200,
      description: 'lorem ipsum',
      imgUrl:
        'https://mayvinhthanh.vn/wp-content/uploads/2021/03/pasted-image-0.png',
    },
    // {
    //   id: '3',
    //   name: 'Quần Bò',
    //   price: 300,
    //   description:
    //     'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
    //   imgUrl:
    //     'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    // },
    // {
    //   id: '4',
    //   name: 'Giày',
    //   price: 350,
    //   description:
    //     'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
    //   imgUrl:
    //     'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    // },

  ];
}
