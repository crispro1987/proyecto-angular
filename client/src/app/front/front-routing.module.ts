import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { FrontComponent } from './front.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: FrontComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'cursoide', component: AboutComponent },
      { path: 'producto/:producto', component: ProductComponent },
      { path: '**', component: Error404Component }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }