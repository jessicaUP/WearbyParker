import * as CartTryonItemApi from '../util/cart_tryon_item'

export const RECEIVE_CART_TRYON_ITEM = 'RECEIVE_CART_TRYON_ITEM'
export const REMOVE_CART_TRYON_ITEM = 'REMOVE_CART_TRYON_ITEM'


const receiveCartTryonItem = cartTryonItem => {
  return {
    type: RECEIVE_CART_ITEM,
    cartTryonItem
  }
}

const removeCartTryonItem = cartTryonItemId => {
  return {
    type: REMOVE_CART_ITEM,
    cartTryonItemId
  }
}

export const fetchCartTryonItem = cartTryonItemId => dispatch => {
  return CartTryonItemApi.fetchCartTryonItems(cartTryonItemId)
    .then(cartTryonItem => dispatch(receiveCartTryonItems(cartTryonItem)))
}

export const createCartTryonItem = cartTryonItem => dispatch => {
  return CartTryonItemApi.postCartTryonItem(cartTryonItem)
    .then(cartTryonItem => dispatch(receiveCartTryonItem(cartTryonItem)))
}

export const updateCartTryonItem = cartTryonItem => dispatch => {
  return CartTryonItemApi.fetchCartTryonItem(cartTryonItem)
    .then(cartTryonItem => dispatch(receiveCartTryonItem(cartTryonItem)))
}

export const deleteCartTryonItem = cartTryonItemId => dispatch => {
  return CartTryonItemApi.deleteCartTryonItem(cartTryonItemId)
    .then(() => dispatch(removeCartTryonItem(cartTryonItemId)))
}
