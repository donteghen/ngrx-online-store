

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ProductService } from './service/product.service';
import { RetrieveProductList } from './store/action';
import { selectCartCollection } from './store/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cart$ = this.store.pipe(select(selectCartCollection));
  count: number;
  constructor(private store: Store) { }
 
  ngOnInit(): void {
  this.cart$.subscribe(data => this.count = data.length)
  }

}
