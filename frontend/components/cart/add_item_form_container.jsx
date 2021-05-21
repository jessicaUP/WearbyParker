import { connect } from 'react-redux';
import { createCartItem } from '../../actions/cart_item_actions';
import AddItemForm from './add_item_form';

// const mSTP = (state) => {
//   return ({

//   })
// }

const mDTP = (dispatch) => {
  debugger
  return ({
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
  })
}

export default connect(null, mDTP)(AddItemForm);