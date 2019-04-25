import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'create-order',
        component: CreateOrderComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
