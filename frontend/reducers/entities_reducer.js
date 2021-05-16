import { combineReducers } from 'redux';

import users from './users_reducer';
import productsReducer from './products_reducer';

const entitiesReducer = combineReducers({
    users,
    products: productsReducer
  });


export default entitiesReducer;