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
<<<<<<< HEAD
    openModal: (modalName, data = {}) => dispatch(openModal(modalName, data))
=======
    openModal: (modalName, data) => dispatch(openModal(modalName, data))
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  })
}



export default connect(mSTP, mDTP)(NavBar);