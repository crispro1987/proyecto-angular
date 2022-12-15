import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { Error404Component } from './error404/error404.component';
import { FrontRoutingModule } from './front-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [FrontComponent, AboutComponent, ProductComponent, Error404Component],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule
  ],
  exports: [FrontComponent, AboutComponent, ProductComponent, Error404Component]
})
export class FrontModule { }
