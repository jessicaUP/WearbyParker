export const RECEIVE_GENDER_PRODUCTS = 'RECEIVE_GENDER_PRODUCTS';


const gendersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_GENDER_PRODUCTS:
      debugger
      nextState[action.gender.genderId] = action.gender;
      return nextState;
    default:
      return oldState;
  }
};

export default gendersReducer;