import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../model/product";
import { AppState } from "./app.state";


export const selectProducts = createSelector(
    (state: AppState) => state.products,
    (products: Array<Product>) => products
  );

export const selectCartState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("cart");

export const selectCartCollection = createSelector(
    selectProducts,
    selectCartState,
    (products: Array<Product>, cart: Array<string>) => {
      return cart.map(id => products.find(product => product.id === id));
    }
  );

  

