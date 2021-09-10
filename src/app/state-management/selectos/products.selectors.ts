import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Product, ProductState} from "../../products/types/products.types";
import {productEntityAdapter} from "../reducers/products/product.reducers";
import {Dictionary} from "@ngrx/entity";

export const selectProductState = createFeatureSelector<ProductState>('productState');
export const {selectEntities, selectAll} = productEntityAdapter.getSelectors();

export const selectProducts = createSelector(
  selectProductState,
  selectEntities
);

export const selectAllProducts = createSelector(
  selectProductState,
  selectAll
)
