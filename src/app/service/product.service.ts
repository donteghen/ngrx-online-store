import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "../model/product";


@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<{ items: Product[] }>(
        "https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=relevance&q=oliver%20sacks"
      )
      .pipe(map(books => books.items || []));
  }
}