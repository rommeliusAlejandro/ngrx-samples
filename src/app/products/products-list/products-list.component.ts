import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../types/products.types";
import {Subscription} from "rxjs";
import {ProductsService} from "../../api-integration/products.service";
import {getAllProducts} from "../../state-management/actions/products/product.actions";
import {selectAllProducts, selectProducts} from "../../state-management/selectos/products.selectors";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private readonly productsService: ProductsService,
    private readonly store: Store
  ) {

    this.productsService.getProducts().subscribe(
      next => {
        this.store.dispatch(getAllProducts({payload: next}))
      }
    )

    const selectSubscription = this.store.select(selectAllProducts).subscribe(next => this.products = next)

    this.subscriptions.add(selectSubscription);

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
