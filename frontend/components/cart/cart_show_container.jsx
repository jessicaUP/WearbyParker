
import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { deleteCartItem } from '../../actions/cart_item_actions';
import { deleteCartTryonItem } from '../../actions/cart_tryon_item_actions';
<<<<<<< HEAD
import { openModal } from '../../actions/modal_actions';
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
import CartShow from './cart_show';

const mSTP = (state) => {
  return ({
    cart: state.entities.cart.cart
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCart: () => dispatch(fetchCart()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
<<<<<<< HEAD
    deleteCartTryonItem: (cartItemId) => dispatch(deleteCartTryonItem(cartItemId)),
    openModal: (modalName, data = {}) => dispatch(openModal(modalName, data))
=======
    deleteCartTryonItem: (cartItemId) => dispatch(deleteCartTryonItem(cartItemId))
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  })
}

export default connect(mSTP, mDTP)(CartShow)