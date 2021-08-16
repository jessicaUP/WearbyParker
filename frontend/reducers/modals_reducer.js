import { OPEN_MODAL, CLOSE_MODAL, RECEIVE_SEARCH_PRODUCTS } from "../actions/modal_actions";
import { RECEIVE_PRODUCTS } from "../actions/product_actions";

let beginState = { modal: null }
const modalReducer = (state = beginState, action) => {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_MODAL:
      nextState['modal'] = action.modal;
      nextState['data'] = action.data;
      return nextState; 
    case CLOSE_MODAL:
      delete nextState['products']
      return beginState;
    case RECEIVE_SEARCH_PRODUCTS:
      nextState['products'] = action.products
      return nextState;
      default:
      return state;
  }
}

export default modalReducer