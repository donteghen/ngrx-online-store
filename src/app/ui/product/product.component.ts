import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddToCart, RetrieveProductList } from 'src/app/store/action';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
product : Product;
  constructor(private activeRoute: ActivatedRoute, private store: Store, private serv: ProductService) { }

  ngOnInit(): void {
   this.activeRoute.params.subscribe(params => {
    this.serv.getProducts().subscribe(products => {
      this.store.dispatch(RetrieveProductList({products}))
      this.product = products.find(prod => prod.id === params.id);
    });
   })
  }

  addToCart(prod_id){
    this.store.dispatch(AddToCart({prod_id}));
  }
}
