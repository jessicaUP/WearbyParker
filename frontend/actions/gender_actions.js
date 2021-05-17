import * as GenderApi from '../util/gender';

export const RECEIVE_GENDER_PRODUCTS = 'RECEIVE_GENDER_PRODUCTS';


const receiveGenderProducts = products => {
  debugger
  return {
    type: RECEIVE_GENDER_PRODUCTS,
    products
  }
};


export const fetchGenderProducts = genderId => dispatch => {
  debugger
  return GenderApi.fetchGenderProducts(genderId).then(products => dispatch(receiveGenderProducts(products)))
}