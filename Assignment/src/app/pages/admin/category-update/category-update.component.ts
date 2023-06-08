import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/interface/ICategories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent {
  category!: ICategories;
  cateForm = this.formBuilder.group({
    "name": ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private routers: Router,
    private categoriesService: CategoriesService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.categoriesService.getCategoriesById(id).subscribe(
        (data) => {
          console.log(data);
          this.category = data;

          this.cateForm.patchValue({
            name: data.name,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  get validate(){
    return this.cateForm.controls
  }
  onHandleSubmit() {
      const id = this.router.snapshot.paramMap.get('id');
      if(id){
          const cate: ICategories = {
          id: id,
          name: this.cateForm.value.name || ''
        };
      if(this.cateForm.valid){
        this.categoriesService.updateCategory(cate).subscribe((cate) => {
          alert(`Sửa sản phẩm thành công: ${cate.name}`);
          this.routers.navigate(['/admin/category'])
        });
      }
      }

  }
  }
