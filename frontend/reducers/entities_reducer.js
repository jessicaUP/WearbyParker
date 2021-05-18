import { combineReducers } from 'redux';

import users from './users_reducer';
import productsReducer from './products_reducer';
import genderProductsReducer from './genders_reducer';

const entitiesReducer = combineReducers({
    users,
    genderProducts: genderProductsReducer,
    products: productsReducer
  });


export default entitiesReducer;