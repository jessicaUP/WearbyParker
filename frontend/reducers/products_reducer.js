<<<<<<< HEAD
import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions';
=======
import { RECEIVE_PRODUCT } from '../actions/product_actions';
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
<<<<<<< HEAD
      case RECEIVE_PRODUCTS:
        nextState['search'] = action.products
        return nextState;
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    default:
      return oldState;
  }
};

export default productsReducer;