import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
      case RECEIVE_PRODUCTS:
        nextState['search'] = action.products
        return nextState;
    default:
      return oldState;
  }
};

export default productsReducer;