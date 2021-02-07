import { ProductsComponent } from './ui/products/products.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from './ui/cart/cart.component';
import { ProductComponent } from './ui/product/product.component';


const routes : Routes = [
    
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'products/:id',
        component: ProductComponent
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }