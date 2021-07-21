
import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import CartShow from './cart_show';

const mSTP = (state) => {
  return ({
    cart: state.entities.cart.cart
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCart: () => dispatch(fetchCart())
  })
}

export default connect(mSTP, mDTP)(CartShow)