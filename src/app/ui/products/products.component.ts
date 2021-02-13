import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddToCart, RemoveFromCart, RetrieveProductList } from 'src/app/store/action';
import { selectProducts } from 'src/app/store/selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products$ = this.store.pipe(select(selectProducts));
  constructor(private store: Store, private serv: ProductService) { }

  ngOnInit(): void {
    this.serv.getProducts().subscribe(products => {
      this.store.dispatch(RetrieveProductList({products}))
      console.log(products)
    });
  }
  
}
