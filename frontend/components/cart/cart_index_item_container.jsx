import { connect } from 'react-redux';
import { updateCartItem, deleteCartItem } from '../../actions/cart_item_actions'
import CartIndexItem from '/cart_index_item'

const mSTP = (state) => {
  return ({
    cartItem: state.cartItem
  })
}

const mDTP = (dispatch) => {
  return ({
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
  })
}

export default connect(mSTP, mDTP)(CartIndexItem)