import {
  RECEIVE_CART_TRYON_ITEM,
  REMOVE_CART_TRYON_ITEM
} from '../actions/cart_tryon_item_actions';

const cartTryonItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CART_TRYON_ITEM:
      nextState[action.cartTryonItem.id] = action.cartTryonItem
    case REMOVE_CART_TRYON_ITEM:
      delete nextState[action.cartTryonItemId];
      return nextState;
    default:
      return oldState;
  }
};

export default cartTryonItemsReducer;