import { createAction, props } from "@ngrx/store";
import { Product } from "../model/product";


export const AddToCart = createAction('[Cart List] Add To Cart', props<{prod_id:string}>());

export const RemoveFromCart = createAction('[Cart List] Remove From Cart', props<{prod_id:string}>());

export const RetrieveProductList = createAction('[Product/Api] Retrive product success', props<{product}>())