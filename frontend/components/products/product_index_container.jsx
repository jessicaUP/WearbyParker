import { connect } from 'react-redux';
import { fetchGenderProducts } from '../../actions/gender_actions'
import ProductIndex from './product_index'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  console.log(state)
  debugger
  return ({
    genderId: state.entities.genders[ownProps.match.params.genderId],
  })
}

const mDTP = dispatch => {
  debugger
  return ({
    fetchGenderProducts: genderId => dispatch(fetchGenderProducts(genderId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ProductIndex))