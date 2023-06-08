import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: IProduct[] = [];
  randomProducts: IProduct[] = [];
  constructor (
    private productService: ProductsService) {  }
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
        this.getRandomProducts();
      },
      (error) => console.log(error.message)
    );
  }

  getRandomProducts() {
    const shuffled = this.products.sort(() => 0.5 - Math.random());
    this.randomProducts = shuffled.slice(0, 4);
  }
}
