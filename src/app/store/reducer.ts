import { AddToCart, RemoveFromCart, RetrieveProductList } from './action';
import { createReducer, on} from "@ngrx/store";
import { Product } from "../model/product";



export const productListInitialState : ReadonlyArray<Product> = [];
export const cartInitialState : ReadonlyArray<string> = [];

export const ProductReducer = createReducer(productListInitialState, 
    on(RetrieveProductList, (state, {products}) => [...products]));  //// Alternative ({...state, Product})


export const CartReducer = createReducer(cartInitialState,
    on(AddToCart, (state,{prod_id}) => {
        if(state.indexOf(prod_id) > -1) return state;

        return [...state, prod_id];
    }),
    on(RemoveFromCart, (state,{prod_id}) => state.filter(id => id !== prod_id))
    )
    
