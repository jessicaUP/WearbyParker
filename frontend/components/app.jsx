import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'
// import { AuthRoute } from '../util/route_util';

import SigninContainer from './session_form/signin_form_container';
import SignupContainer from './session_form/signup_form_container';



const App = () => (
  <>
  <Route path='/' component={NavBarContainer}></Route>
  <Switch>
    <Route path='/signin' component={SigninContainer} />
    <Route path='/signup' component={SignupContainer} />
  </Switch>
  </>
);

export default App;