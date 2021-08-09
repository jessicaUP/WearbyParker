import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { fetchSearchProducts } from '../../actions/product_actions';
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
    fetchSearchProducts: (input) => dispatch(fetchSearchProducts(input))
  })
}



export default connect(mSTP, mDTP)(Modal);