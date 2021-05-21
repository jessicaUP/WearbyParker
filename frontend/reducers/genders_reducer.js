import { RECEIVE_GENDER_PRODUCTS } from '../actions/gender_actions'

const genderProductsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_GENDER_PRODUCTS:
      let genderId = parseInt(Object.keys(action.products)[0])

      nextState[genderId] = action.products;
      return nextState;
    default:
      return oldState;
  }
};

export default genderProductsReducer;