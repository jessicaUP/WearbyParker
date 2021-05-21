import { combineReducers } from 'redux';

import users from './users_reducer';
import productsReducer from './products_reducer';
import genderProductsReducer from './genders_reducer';
import fullCartReducer from './full_cart_reducer';

const entitiesReducer = combineReducers({
    users,
    genderProducts: genderProductsReducer,
    products: productsReducer,
    cart: fullCartReducer
  });


export default entitiesReducer;