import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { closeModal, fetchSearchProducts } from '../../actions/modal_actions';
import { deleteCart } from '../../actions/cart_actions';
// import {  } from '../../act /ions/product_actions';
=======
import { closeModal } from '../../actions/modal_actions';
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
import Modal from './modal';


const mSTP = state => {
<<<<<<< HEAD
  debugger
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  return ({
    modal: state.ui.modal
  })
}

const mDTP = dispatch => {
  return ({
<<<<<<< HEAD
    closeModal: () => dispatch(closeModal()),
    fetchSearchProducts: (input) => dispatch(fetchSearchProducts(input)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
=======
    closeModal: () => dispatch(closeModal())
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  })
}



export default connect(mSTP, mDTP)(Modal);