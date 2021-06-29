import { combineReducers } from 'redux';
import cartsReducer from './carts_reducer';
import cartItemsReducer from './products_reducer';
import cartTryonItemsReducer from './products_reducer';

const fullCartReducer = combineReducers({
  cart: cartsReducer,
  cartItems: cartItemsReducer,
  cartTryonItems: cartTryonItemsReducer 
});

export default fullCartReducer;