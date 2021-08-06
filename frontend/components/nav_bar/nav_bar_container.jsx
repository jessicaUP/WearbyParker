import React from 'react';
import {connect} from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';


const mSTP = state => {
  return ({
    currentUser: state.session.id,
    cart: state.entities.cart.cart
  })
}

const mDTP = dispatch => {
  return ({
    fetchCart: () => dispatch(fetchCart()),
    openModal: modalName => dispatch(openModal(modalName))
  })
}



export default connect(mSTP, mDTP)(NavBar);