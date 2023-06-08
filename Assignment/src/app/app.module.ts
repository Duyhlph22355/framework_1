import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutComponent } from './pages/user/layout/layout.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutAdminComponent } from './pages/admin/layout-admin/layout-admin.component';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { AdminVerticalComponent } from './components/admin/admin-vertical/admin-vertical.component';
import { CartComponent } from './pages/user/cart/cart.component';

import { ChartModule } from 'primeng/chart';
import { ProductMaleComponent } from './pages/user/product-male/product-male.component';
import { ProductFemaleComponent } from './pages/user/product-female/product-female.component';
import { ProductChildrenComponent } from './pages/user/product-children/product-children.component';
import { DataViewModule  } from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';

import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { AdminProductMaleComponent } from './pages/admin/admin-product-male/admin-product-male.component';
import { AdminProductFemaleComponent } from './pages/admin/admin-product-female/admin-product-female.component';
import { AdminProductChildrenComponent } from './pages/admin/admin-product-children/admin-product-children.component';
import { AdminCategoryComponent } from './pages/admin/admin-category/admin-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    DashboardComponent,
    LayoutComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    NotFoundComponent,
    LayoutAdminComponent,
    ProductsAdminComponent,
    LoginAdminComponent,
    AdminVerticalComponent,
    CartComponent,
    ProductMaleComponent,
    ProductFemaleComponent,
    ProductChildrenComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    AdminProductMaleComponent,
    AdminProductFemaleComponent,
    AdminProductChildrenComponent,
    AdminCategoryComponent
  ],
  imports: [
    ButtonModule,
    TagModule,
    RatingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule,
    DataViewModule,
    HttpClientModule,
    TableModule,
    TreeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
