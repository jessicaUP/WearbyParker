import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SigninContainer from './session_form/signin_form_container';
import SignupContainer from './session_form/signup_form_container';



const App = () => (
  <>
  <h3>WEARBY PARKER</h3>
  <Switch>
    <AuthRoute path='/signin' component={SigninContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
  </Switch>
  </>
);

export default App;