import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { LayoutComponent } from './pages/user/layout/layout.component';
import { LayoutAdminComponent } from './pages/admin/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { ProductMaleComponent } from './pages/user/product-male/product-male.component';
import { ProductFemaleComponent } from './pages/user/product-female/product-female.component';
import { ProductChildrenComponent } from './pages/user/product-children/product-children.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { AdminProductMaleComponent } from './pages/admin/admin-product-male/admin-product-male.component';
import { AdminProductFemaleComponent } from './pages/admin/admin-product-female/admin-product-female.component';
import { AdminProductChildrenComponent } from './pages/admin/admin-product-children/admin-product-children.component';
import { AdminCategoryComponent } from './pages/admin/admin-category/admin-category.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      {path: "product/:id", component: ProductDetailComponent},
      {path: "cart", component: CartComponent},
      {path: "product_male", component: ProductMaleComponent},
      {path: "product_female", component: ProductFemaleComponent},
      {path: "product_children", component: ProductChildrenComponent},
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent,
    children: [
      {path: "", component: LoginAdminComponent},
      {path: "home", component: DashboardComponent},
      {path: "product_male", component: AdminProductMaleComponent},
      {path: "product_female", component: AdminProductFemaleComponent},
      {path: "product_children", component: AdminProductChildrenComponent},
      {path: "product_add", component: ProductAddComponent},
      {path: "product_update/:id", component: ProductUpdateComponent},
      {path: "category", component: AdminCategoryComponent},
      {path: "category_add", component: CategoryAddComponent},
      {path: "category_update/:id", component: CategoryUpdateComponent},

    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
