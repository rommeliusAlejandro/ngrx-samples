import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../types/products.types";
import {ApiHttpClient} from "./api.http.client";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly apiHttpClient: ApiHttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.apiHttpClient.get<Product[]>('api/products');
  }

  saveProduct(newProduct: Product): Observable<Product> {
    return this.apiHttpClient.post<Product>('api/products', newProduct);
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.apiHttpClient.delete<Product>(`api/products/${productId}`);
  }
}
