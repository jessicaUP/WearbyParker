import { fetchGender } from '../util/gender';

export const RECEIVE_GENDER = 'RECEIVE_GENDER';


const receiveGender = gender => {
  return {
    type: RECEIVE_GENDER,
    gender
  }
};


export const fetchGender = genderId => dispatch => (
  fetchGender(genderId).then(gender => dispatch(receiveGender(gender)))
)