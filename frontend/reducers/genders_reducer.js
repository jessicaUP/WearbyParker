export const RECEIVE_GENDER = 'RECEIVE_GENDER';


const gendersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_GENDER:
      nextState[action.gender.id] = action.gender;
      return nextState;
    default:
      return oldState;
  }
};

export default gendersReducer;