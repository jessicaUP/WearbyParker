import * as GenderApi from '../util/gender';

export const RECEIVE_GENDER_PRODUCTS = 'RECEIVE_GENDER_PRODUCTS';


const receiveGenderProducts = products => {
  return {
    type: RECEIVE_GENDER_PRODUCTS,
    products
  }
};


export const fetchGenderProducts = (genderId) => dispatch => {
  return GenderApi.fetchGenderProducts(genderId)
    .then(products => dispatch(receiveGenderProducts(products)))
}

export const fetchGenderSearchProducts = (data) => dispatch => {
  return GenderApi.fetchGenderSearchProducts(data)
    .then(products => dispatch(receiveGenderProducts(products)))
}