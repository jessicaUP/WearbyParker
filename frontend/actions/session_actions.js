import {
  postUser,
  postSession,
  deleteSession
} from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return { 
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  }
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors //errors: errors.responseJSON
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const createNewUser = user => dispatch => postUser(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors)));


export const login = user => dispatch => postSession(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors)));


export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors)));
