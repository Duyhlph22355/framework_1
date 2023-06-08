import { Component } from '@angular/core';
import { ICategories } from 'src/app/interface/ICategories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  CategoryList: ICategories[] = [];
  constructor(
    private categoriesService: CategoriesService
  ) {

  }
  ngOnInit(){
    this.categoriesService.getCategories().subscribe((data:any) => {
      this.CategoryList = data
    })
  }
  delete(id: string) {
    const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (confirmed) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.CategoryList = this.CategoryList.filter((category) => category.id !== id);
    });
  }
  }
}
