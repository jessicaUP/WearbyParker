import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mSTP = ({ errors }) => ({
  errors: Object.values(errors)
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SigninForm);