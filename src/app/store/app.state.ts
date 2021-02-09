import { cartLine } from '../model/cart';
import { Product } from './../model/product';

export interface AppState{
    products:  ReadonlyArray<Product>,
    cart : ReadonlyArray<string>
}