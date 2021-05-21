import * as CartApi from '../util/cart'

export const RECEIVE_CART = 'RECEIVE_CART'
export const REMOVE_CART = 'REMOVE_CART'


const receiveCart = cart => {
  return {
    type: RECEIVE_CART,
    cart
  }
}
const removeCart = cartId => {
  return {
    type: REMOVE_CART,
  }
}

export const fetchCart = () => dispatch => {
  return CartApi.fetchCart()
  .then(cart => dispatch(receiveCart(cart)))
}

export const createCart = () => dispatch => {
  return CartApi.postCart()
    .then(cart => dispatch(receiveCart(cart)))
}

export const deleteCart = cartId => {
  return CartApi.deleteCart(cartId) 
    .then
}
