import * as ProductApi from '../util/product';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';


const receiveProduct = product => {
  return ({
    type: RECEIVE_PRODUCT,
    product
  })
};

const receiveProducts = products => {
  return ({
    type: RECEIVE_PRODUCTS,
    products
  })
};


export const fetchProduct = productId => dispatch => {
  
  return ProductApi.fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
}


