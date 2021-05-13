import React from 'react';
import { connect } from 'react-redux';
import Account from './account'
import { logout } from '../../actions/session_actions';


const mSTP = (state) => ({
  user: state.session.currentUser
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Account);