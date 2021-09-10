import {EntityState} from "@ngrx/entity";

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductState extends EntityState<Product> {
}
