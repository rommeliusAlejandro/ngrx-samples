import {Product} from "../../types/products.types";

export interface AppState {
  products: ReadonlyArray<Product>;
}
