import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllProducts} from "../../state-management/selectos/products.selectors";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-products-report',
  templateUrl: './products-report.component.html',
  styleUrls: ['./products-report.component.css']
})
export class ProductsReportComponent implements OnInit {

  totalProducts: number = 0;

  constructor(
    private readonly store: Store
  ) {

    this.store.select(selectAllProducts)
      .pipe(
        filter(products => products.length % 2 === 0)
      ).subscribe(
      products => {
        this.totalProducts = products.length;
      }
    )

  }

  ngOnInit(): void {
  }

}
