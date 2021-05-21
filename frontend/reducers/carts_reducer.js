import {
  RECEIVE_CART,
  REMOVE_CART
} from '../actions/cart_actions'


const cartsReducer = (oldState = {} , action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    case REMOVE_CART:
      return nextState
    default:
      return oldState;
  }
}

export default cartsReducer;