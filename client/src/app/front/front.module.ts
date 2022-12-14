import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { Error404Component } from './error404/error404.component';
import { FrontRoutingModule } from './front-routing.module';



@NgModule({
  declarations: [FrontComponent, ProductsComponent, ProductComponent, Error404Component],
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  exports: [FrontComponent, ProductsComponent, ProductComponent, Error404Component]
})
export class FrontModule { }
