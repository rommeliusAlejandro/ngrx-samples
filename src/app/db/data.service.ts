import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Product} from "../products/types/products.types";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    return {
      products: [
        {
          id: '1',
          name: 'Pants',
          description: 'Blue Pants',
          sku: 'a-b-c',
          price: 10.5
        }
      ],
      users: [
        {
          id: '1',
          name: 'Rommel'
        }
      ]
    };
  }


}
