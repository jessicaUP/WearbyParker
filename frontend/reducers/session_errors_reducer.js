import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _initialState = [];
const sessionErrorsReducer =  (state = _initialState, action) => {
  Object.freeze(state);

  let errors = [];
  
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
       errors.push(action.errors.responseJSON);
       return errors
    case RECEIVE_CURRENT_USER:
      return _initialState;
    // case CLEAR_SESSION_ERRORS:
    default:
      return _initialState;
  }
};

export default sessionErrorsReducer;