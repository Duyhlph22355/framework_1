import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { LayoutComponent } from './pages/user/layout/layout.component';
import { LayoutAdminComponent } from './pages/admin/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      {path: "product/:id", component: ProductDetailComponent},
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent,
    children: [
      {path: "", component: DashboardComponent},
      {path: "products", component: ProductsAdminComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
