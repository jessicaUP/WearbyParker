export const RECEIVE_GENDER_PRODUCTS = 'RECEIVE_GENDER_PRODUCTS';


const genderProductsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_GENDER_PRODUCTS:
      debugger
      let genderId = parseInt(Object.keys(action.products)[0])

      nextState[genderId] = action.products;
      return nextState;
    default:
      return oldState;
  }
};

export default genderProductsReducer;