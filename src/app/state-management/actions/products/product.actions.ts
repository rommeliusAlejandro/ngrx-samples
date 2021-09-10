import {createAction, props} from "@ngrx/store";
import {Product} from "../../../types/products.types";

export const addProduct = createAction(
  '[Products] Add Product',
  props<ActionPayload<Product>>()
)

export const removeProduct = createAction(
  '[Products] Remove Product',
  props<ActionPayload<string>>()
);

export const setAllProducts = createAction(
  '[Products] Get all products',
  props<ActionPayload<Product[]>>()
);

export interface ActionPayload<T> {
  payload: T;
}

