import { actionType } from "../actionTypes/action-type";

export const setProductAction = (data) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: data,
  };
};
export const selectedProductAction = (data) => {
  return {
    type: actionType.SELECTED_PRODUCTS,
    payload: data,
  };
};
export const removeSelectedProductAction = () => {
  return {
    type: actionType.REMOVE_SELECTED_PRODUCTS,
  };
};
