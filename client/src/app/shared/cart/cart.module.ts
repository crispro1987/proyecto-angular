import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartDirective } from '../directives/cart.directive';

@NgModule({
  declarations: [CartComponent, CartDirective],
  imports: [
    CommonModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
