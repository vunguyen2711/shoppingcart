import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProduct: productReducer,
  product: selectedProductsReducer,
});
export default reducers;
