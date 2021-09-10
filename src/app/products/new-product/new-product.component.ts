import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {addProduct} from "../../state-management/actions/products/product.actions";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name!: string;
  price!: number;
  description!: string

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.store.dispatch(addProduct({
      payload: {
        id: '123',
        sku: '123',
        name: this.name,
        description: this.description,
        price: this.price
      }
    }))
  }

}
