import { ProductFormComponent } from './admin/product-form/product-form.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShopingCardsComponent } from './shoping-cards/shoping-cards.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'shoping-cards', component: ShopingCardsComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'admin/admin-orders', component: AdminOrdersComponent },
  { path: 'admin/admin-products', component: AdminProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-form', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
