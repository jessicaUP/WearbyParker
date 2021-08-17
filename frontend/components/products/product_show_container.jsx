import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_item_actions';
import ProductShow from './product_show';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  return ({
    product: state.entities.products[ownProps.match.params.productId]
  })
};

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  createCartItem: cartItem => dispatch(createCartItem(cartItem)),
  openModal: (name, data) => dispatch(openModal(name, data))
});

export default withRouter(connect(mSTP, mDTP)(ProductShow));