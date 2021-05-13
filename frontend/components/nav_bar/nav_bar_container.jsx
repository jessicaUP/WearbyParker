import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';


const mSTP = state => ({
  currentUser: state.session.id
});

export default connect(mSTP)(NavBar);