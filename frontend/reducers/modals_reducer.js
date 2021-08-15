<<<<<<< HEAD
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
=======
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

let beginState = { modal: null }
const modalReducer = (state = beginState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal, data: action.data }; 
    case CLOSE_MODAL:
      return beginState;
    default:
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      return state;
  }
}

export default modalReducer