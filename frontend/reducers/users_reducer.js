export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let nextState = Object.assign({}, oldState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return nextState[action.currentUser.id] = action.currentUser;
    default:
      return oldState;
  }
};

export default usersReducer;