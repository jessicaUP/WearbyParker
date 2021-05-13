import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
  errors: state.errors
});

const mDTP = dispatch => ({
  createNewUser: user => dispatch(createNewUser(user)),
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SignupForm);