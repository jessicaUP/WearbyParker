import { connect } from 'react-redux';
import { fetchGenderProducts } from '../../actions/gender_actions'
import ProductIndex from './product_index'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    genderId: state.entities.genderProducts[ownProps.match.params.genderId],
  })
}

const mDTP = dispatch => {
  return ({
    fetchGenderProducts: genderId => dispatch(fetchGenderProducts(genderId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ProductIndex))