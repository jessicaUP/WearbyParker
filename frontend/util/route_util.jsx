// import React from 'react';
// import { Route, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// const mSTP = state => ({
//   loggedIn: Boolean(state.session.id) 
// });


// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//   <Route path={path} exact={exact} render={(props) => (
//     !loggedIn ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to="/" />
//     )
//   )} />
// );

// // const Protected = ({ component: Component, path, loggedIn }) => (
// //   <Route
// //     path={path}
// //     render={props => !loggedIn ? <Redirect to="/signup" /> : <Component {...props} /> }
// //   />
// // )


// export const AuthRoute = withRouter(connect(mSTP)(Auth));
// // export const ProtectedRoute = withRouter(connect(mSTP)(Protected));