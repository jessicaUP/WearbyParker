
import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { deleteCartItem } from '../../actions/cart_item_actions';
import CartShow from './cart_show';

const mSTP = (state) => {
  return ({
    cart: state.entities.cart.cart
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCart: () => dispatch(fetchCart()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
  })
}

export default connect(mSTP, mDTP)(CartShow)