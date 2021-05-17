import { combineReducers } from 'redux';

import users from './users_reducer';
import productsReducer from './products_reducer';
import gendersReducer from './genders_reducer';

const entitiesReducer = combineReducers({
    users,
    genders: gendersReducer,
    products: productsReducer
  });


export default entitiesReducer;