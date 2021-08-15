import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'

import SigninContainer from './session_form/signin_form_container';
import SignupContainer from './session_form/signup_form_container';
import AccountContainer from './account/account_container';
import ProductShowContainer from './products/product_show_container';
import ProductIndexContainer from './products/product_index_container';
import CartShowContainer from './cart/cart_show_container';
import ModalContainer from './modal/modal_container';
<<<<<<< HEAD
import Footer from './footer/footer';
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a



const App = () => (
  <>
  <ModalContainer />
  <Route path='/' component={NavBarContainer}></Route>
  <Switch>
    <Route path='/genders/:genderId' component={ProductIndexContainer} />
    <Route path='/products/:productId/color/:colorId' component={ProductShowContainer} />
    <AuthRoute path='/signin' component={SigninContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />

    <ProtectedRoute path='/account' component={AccountContainer} />
    <Route path='/carts' component={CartShowContainer} />
    <Splash />
  </Switch>
<<<<<<< HEAD
  <Footer />
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  </>
);

export default App;