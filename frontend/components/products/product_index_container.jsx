import { connect } from 'react-redux';
import { fetchGenderProducts, fetchGenderSearchProducts } from '../../actions/gender_actions';
import { fetchCart } from '../../actions/cart_actions';
import { createCartTryonItem, deleteCartTryonItem } from '../../actions/cart_tryon_item_actions';
import ProductIndex from './product_index';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
  return ({
    genderId: state.entities.genderProducts[ownProps.match.params.genderId],
    cart: state.entities.cart.cart.cartTryonItems
  })
};

const mDTP = dispatch => {
  return ({
    fetchGenderProducts: genderId => dispatch(fetchGenderProducts(genderId)),
    fetchGenderSearchProducts: data => dispatch(fetchGenderSearchProducts(data)),
    fetchCart: () => dispatch(fetchCart()),
    createTryonItem: (item) => dispatch(createCartTryonItem(item)),
    deleteTryonItem: (itemId) => dispatch(deleteCartTryonItem(itemId))
  })
};

export default withRouter(connect(mSTP, mDTP)(ProductIndex));