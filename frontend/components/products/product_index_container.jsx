import { connect } from 'react-redux';
<<<<<<< HEAD
import { fetchGenderProducts, fetchGenderSearchProducts } from '../../actions/gender_actions';
import { fetchCart } from '../../actions/cart_actions';
import { openModal } from '../../actions/modal_actions';
=======
import { fetchGenderProducts } from '../../actions/gender_actions';
import { fetchCart } from '../../actions/cart_actions';
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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
<<<<<<< HEAD
    fetchGenderSearchProducts: data => dispatch(fetchGenderSearchProducts(data)),
    fetchCart: () => dispatch(fetchCart()),
    createTryonItem: (item) => dispatch(createCartTryonItem(item)),
    deleteTryonItem: (itemId) => dispatch(deleteCartTryonItem(itemId)),
    openModal: (type) => dispatch(openModal(type)),
    
=======
    fetchCart: () => dispatch(fetchCart()),
    createTryonItem: (item) => dispatch(createCartTryonItem(item)),
    deleteTryonItem: (itemId) => dispatch(deleteCartTryonItem(itemId))
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  })
};

export default withRouter(connect(mSTP, mDTP)(ProductIndex));