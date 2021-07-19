
import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import CartShow from './cart_show';

const mSTP = (state) => {
  debugger
  return ({
    cartItems: Object.values(state.entities.cart.cart)
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCart: (cartId) => dispatch(fetchCart(cartId))
  })
}

export default connect(mSTP, mDTP)(CartShow)