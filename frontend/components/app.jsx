import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SigninContainer from './session_form/signin_form_container';
import SignupContainer from './session_form/signup_form_container';


const App = () => (
  <div>
    <h3>WEARBY PARKER</h3>
    <Switch>
      <Route path='/login' component={SigninContainer} />
      <Route path='/signup' component={SignupContainer} />
    </Switch>
  </div>
);

export default App;