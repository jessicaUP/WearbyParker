import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'

const mSTP = (state, ownProps) => {
  debugger
  return ({
    product: state.entities.products[ownProps.match.params.productId]
})}

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
})
export default connect(mSTP, mDTP)(ProductShow)