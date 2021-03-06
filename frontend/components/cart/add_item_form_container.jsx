import { connect } from 'react-redux';
import { createCartItem } from '../../actions/cart_item_actions';
import { createCartTryonItem } from '../../actions/cart_tryon_item_actions';
import AddItemForm from './add_item_form';

// const mSTP = (state) => {
//   return ({

//   })
// }

const mDTP = (dispatch) => {
  return ({
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    createCartTryonItem: (cartItem) => dispatch(createCartTryonItem(cartItem))
  })
}

export default connect(null, mDTP)(AddItemForm);