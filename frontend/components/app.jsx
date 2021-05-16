import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'

import SigninContainer from './session_form/signin_form_container';
import SignupContainer from './session_form/signup_form_container';
import AccountContainer from './account/account_container';
import ProductShowContainer from './products/product_show_container';



const App = () => (
  <>
  <Route path='/' component={NavBarContainer}></Route>
  <Switch>
    <Route path='/products/:productId' component={ProductShowContainer} />
    <AuthRoute path='/signin' component={SigninContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <ProtectedRoute path='/account' component={AccountContainer} />
    <Splash />
  </Switch>
  </>
);

export default App;