import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [FrontComponent, ProductsComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class FrontModule { }
