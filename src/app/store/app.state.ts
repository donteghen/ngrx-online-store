import { cartLine } from '../model/cart';
import { Product } from './../model/product';

export interface appState{
    products:  ReadonlyArray<Product>,
    cart : ReadonlyArray<cartLine>
}