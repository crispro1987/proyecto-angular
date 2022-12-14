import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { Error404Component } from './error404/error404.component';
import { FrontRoutingModule } from './front-routing.module';
import { MaterialModule } from '../material.module';
import { ProductsPipe } from './shared/filters/products.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorGreenDirective } from '../shared/directives/color-green.directive';
import { TypePipe } from './shared/filters/type.pipe';



@NgModule({
  declarations: [FrontComponent, AboutComponent, ProductComponent, Error404Component, ProductsPipe, ColorGreenDirective, TypePipe],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [FrontComponent, AboutComponent, ProductComponent, Error404Component]
})
export class FrontModule { }
