import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Product, ProductState} from "../../types/products.types";
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

export const selectProductById = (productId: string) => {
  return createSelector(
    selectAllProducts,
    (products: Product[]): Product|null => {
      const prod = products.find(product => product.id === productId);
      if(prod) {
        return prod;
      }

      return null;
    }
  )
}
