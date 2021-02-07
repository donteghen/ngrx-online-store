import { Product } from "./product";

export interface Cart{
    products: cartLine[];
    total:number
}

export interface cartLine{
    product:Product,
    quantity:number,
    lineTotal:number
}