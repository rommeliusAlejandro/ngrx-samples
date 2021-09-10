import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {addProduct} from "../../state-management/actions/products/product.actions";
import {ProductsService} from "../../api-integration/products.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name!: string;
  price!: number;
  id!: string;
  sku!: string;
  description!: string

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
  }

  save() {

    const newProduct = {
      id: this.id,
      sku: this.sku,
      name: this.name,
      description: this.description,
      price: this.price
    };
    this.store.dispatch(addProduct({
      payload: newProduct
    }))
  }

}
