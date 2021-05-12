import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => ({
  errors: errors.session
});

const mDTP = dispatch => ({
  createUser: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);