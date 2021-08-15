import * as GenderApi from '../util/gender';

export const RECEIVE_GENDER_PRODUCTS = 'RECEIVE_GENDER_PRODUCTS';


const receiveGenderProducts = products => {
  return {
    type: RECEIVE_GENDER_PRODUCTS,
    products
  }
};


<<<<<<< HEAD
export const fetchGenderProducts = (genderId) => dispatch => {
  return GenderApi.fetchGenderProducts(genderId)
    .then(products => dispatch(receiveGenderProducts(products)))
}

export const fetchGenderSearchProducts = (data) => dispatch => {
  return GenderApi.fetchGenderSearchProducts(data)
    .then(products => dispatch(receiveGenderProducts(products)))
=======
export const fetchGenderProducts = genderId => dispatch => {
  return GenderApi.fetchGenderProducts(genderId)
    .then(products => dispatch(receiveGenderProducts(products)))
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
}