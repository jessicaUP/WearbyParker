import * as ProductApi from '../util/product';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';


const receiveProduct = product => {
  return ({
    type: RECEIVE_PRODUCT,
    product
  })
};


export const fetchProduct = productId => dispatch => {
  
  return ProductApi.fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
}
