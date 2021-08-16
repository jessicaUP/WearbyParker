import React from 'react';
import { connect } from 'react-redux';
import { closeModal, fetchSearchProducts } from '../../actions/modal_actions';
import { deleteCart } from '../../actions/cart_actions';
// import {  } from '../../act /ions/product_actions';
import Modal from './modal';


const mSTP = state => {
  debugger
  return ({
    modal: state.ui.modal
  })
}

const mDTP = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchSearchProducts: (input) => dispatch(fetchSearchProducts(input)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  })
}



export default connect(mSTP, mDTP)(Modal);