import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  type: 'Create Account'
});

const mDTP = dispatch => ({
  createUser: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);