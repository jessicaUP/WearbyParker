import { connect } from 'react-redux';
// import { fetchSearchProducts } from '../../actions/product_actions';
import { closeModal, fetchSearchProducts } from '../../actions/modal_actions';
// import { fetchCart } from '../../actions/cart_actions';
// import { createCartTryonItem, deleteCartTryonItem } from '../../actions/cart_tryon_item_actions';
import SearchModal from './search_modal';
import { withRouter } from 'react-router-dom';


const mSTP = (state) => {
  debugger
  return ({
    products: state.ui.modal.products
    // products: state.entities.products.search
  })
};

const mDTP = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchSearchProducts: (input) => dispatch(fetchSearchProducts(input))
  })
};

export default withRouter(connect(mSTP, mDTP)(SearchModal));