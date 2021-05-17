import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  console.log(ownProps.match.params.productId)
  console.log(state)
  debugger
  return ({
    product: state.entities.products[ownProps.match.params.productId]
  })
}

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default withRouter(connect(mSTP, mDTP)(ProductShow))