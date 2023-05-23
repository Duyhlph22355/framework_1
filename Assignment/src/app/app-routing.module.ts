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
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent,
    children: [
      {path: "", component: LoginAdminComponent},
      {path: "home", component: DashboardComponent},
      {path: "products", component: ProductsAdminComponent},
    ]
  },
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
