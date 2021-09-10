import {Product} from "../../products/types/products.types";

export interface AppState {
  products: ReadonlyArray<Product>;
}
