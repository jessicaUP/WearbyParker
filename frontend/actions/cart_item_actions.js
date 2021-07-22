import * as CartItemApi from '../util/cart_item'


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'



const receiveCartItem = cartItem => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
}

const removeCartItem = cartItemId => {
  return {
    type: REMOVE_CART_ITEM,
    cartItemId
  }
}
  
export const fetchCartItem = cartItemId => dispatch => {
  return CartItemApi.fetchCartItem(cartItemId)
      .then(cartItem => dispatch(receiveCartItems(cartItem)))
  }

export const createCartItem = cartItem => dispatch => {
  return CartItemApi.postCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const updateCartItem = cartItem => dispatch => {
  return CartItemApi.fetchCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const deleteCartItem = cartItemId => dispatch => {
  return CartItemApi.deleteCartItem(cartItemId)
    .then(() => dispatch(removeCartItem(cartItemId)))
}



