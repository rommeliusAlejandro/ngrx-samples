import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Action, ActionReducerMap, StoreModule} from "@ngrx/store";
import {productsReducer} from "./reducers/products/product.reducers";
import {ProductState} from "../products/types/products.types";

export interface State {
  productState: ProductState
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'Root reducers token',
  {
    factory: () => ({productState: productsReducer})
  }
);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ]
})
export class StateManagementModule { }
