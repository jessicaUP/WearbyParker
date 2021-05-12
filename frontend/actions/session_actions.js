// import * as APIUtil from '../util/session_api_util';

import {
  postUser,
  postSession,
  deleteSession
} from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

export const createNewUser = user => dispatch => postUser(user)
  .then(user => dispatch(receiveCurrentUser(user)));

window.user =  {
    name: 'jessica',
    email: 'jess@me.com',
    password: 'password'
  }



window.createNewUser = createNewUser;

export const login = user => dispatch => postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)));


export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
