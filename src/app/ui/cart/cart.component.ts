import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RemoveFromCart } from 'src/app/store/action';
import { selectCartCollection } from 'src/app/store/selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  count :number;
  cart$ = this.store.pipe(select(selectCartCollection));
  constructor(private store: Store) { }
ngOnInit(){
this.cart$.subscribe(data => this.count = data.length)
}
  removeFromCart(prod_id){
    this.store.dispatch(RemoveFromCart({prod_id}));
  }
}
