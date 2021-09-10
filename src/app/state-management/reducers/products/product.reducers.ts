import {Product} from "../../../products/types/products.types";
import {createReducer, on} from "@ngrx/store";
import {addProduct, setAllProducts, removeProduct} from "../../actions/products/product.actions";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";

const selectId = (product: Product): string => product.id;

export const productEntityAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId,
  sortComparer: false
});

export const productsReducer = createReducer(
  productEntityAdapter.getInitialState(),
  on(setAllProducts, (state, actionPayload) => {
    return productEntityAdapter.setAll(actionPayload.payload, state)
  }),
  on(addProduct, (state, actionPayload) => productEntityAdapter.addOne(actionPayload.payload, state)),
  on(removeProduct, (state, actionPayload) => productEntityAdapter.removeOne(actionPayload.payload, state))
)


