import React from 'react';
import { connect } from 'react-redux';
import { closeModal, fetchSearchProducts } from '../../actions/modal_actions';
// import {  } from '../../act /ions/product_actions';
import Modal from './modal';


const mSTP = state => {
  return ({
    modal: state.ui.modal
  })
}

const mDTP = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchSearchProducts: (input) => dispatch(fetchSearchProducts(input))
  })
}



export default connect(mSTP, mDTP)(Modal);