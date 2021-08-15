import * as ProductApi from '../util/product';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
<<<<<<< HEAD
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a


const receiveProduct = product => {
  return ({
    type: RECEIVE_PRODUCT,
    product
  })
};

<<<<<<< HEAD
const receiveProducts = products => {
  return ({
    type: RECEIVE_PRODUCTS,
    products
  })
};

=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

export const fetchProduct = productId => dispatch => {
  
  return ProductApi.fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
}
<<<<<<< HEAD


=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
