import { actionType } from "../actionTypes/action-type";

const initialState = {
  products: [{ id: 1, title: "Dipesh", categories: "Bama" }],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SELECTED_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case actionType.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
