
import { ProductService } from './service/product.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { selectCartCollection, selectProducts } from './store/selectors';
import { RetrieveProductList } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products$ = this.store.pipe(select(selectProducts));
  cart$ = this.store.pipe(select(selectCartCollection));
  constructor(private store : Store, private prodService:ProductService){}
 ngOnInit(){
  this.prodService.getProducts().subscribe(product => this.store.dispatch(RetrieveProductList({product})))
 }

}
