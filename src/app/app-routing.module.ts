import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfigComponent } from './pages/config/config.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path:"gestion", component: ConfigComponent
  },{
    path:"products", component: ProductsComponent
  },{
    path:"gestion/:id", component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
