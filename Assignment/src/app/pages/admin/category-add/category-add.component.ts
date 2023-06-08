import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/interface/ICategories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService
  ) {

  }
  cateForm = this.formBuilder.group({
    "name": ['', [Validators.required]],
  });
  get validate(){
    return this.cateForm.controls
  }
  onHandleSubmit() {
    const cate: ICategories = {
      id: '',
      name: this.cateForm.value.name || ''
    };
    if(this.cateForm.valid){
      this.categoriesService.addCategory(cate).subscribe((cate) => {
        alert(`Thêm sản phẩm thành công: ${cate.name}`);
        this.router.navigate(['/admin/category'])
      });
    }
  }
}
