import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent, HomeComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
