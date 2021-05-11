import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  type: 'Log in'
});

const mDTP = dispatch => ({
  loginUser: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);