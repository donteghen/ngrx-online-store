import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './ui/products/products.component';
import { ProductComponent } from './ui/product/product.component';
import { CartComponent } from './ui/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { CartReducer, ProductReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule,
    StoreModule.forRoot({products:ProductReducer, cart:CartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
