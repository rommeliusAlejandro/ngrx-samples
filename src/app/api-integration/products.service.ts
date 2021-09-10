import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../products/types/products.types";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/products');
  }

  saveProduct(newProduct: Product): Observable<Product[]> {
    return this.httpClient.post<Product[]>('api/products', newProduct);
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.httpClient.delete<Product>(`api/products/${productId}`);
  }
}
