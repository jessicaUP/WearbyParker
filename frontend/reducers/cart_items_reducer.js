import {
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from '../actions/cart_item_actions';

const cartItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CART_ITEM:
      nextState[action.cartItem.id] = action.cartItem
    case REMOVE_CART_ITEM:
      delete nextState[action.cartItemId];
      return nextState;
    default: 
      return oldState;
  }
}

export default cartItemsReducer;