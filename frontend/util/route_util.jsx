import React, { Component } from 'react';
import { Route, HashRouter, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ componenet: Component, path, loggedIn, exact }) => (
  <Route 
   path={path}
   exact={exact}
   render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/" />} 
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
  />
)

const mSTP = state => (
  { loggedin: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));