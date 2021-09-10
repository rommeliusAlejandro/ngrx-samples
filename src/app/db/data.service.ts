import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Product} from "../types/products.types";

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
          firstName: 'Rommel',
          lastName: 'Loayza',
          email: 'rommel.loayza@dharbor.com',
          password: 'Password1!'
        },
        {
          id: '2',
          firstName: 'Homer',
          lastName: 'Simpson',
          email: 'homer.simpson@dharbor.com',
          password: 'Password1!'
        }
      ]
    };
  }


}
