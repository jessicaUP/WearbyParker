<<<<<<< HEAD
import * as ModalApi from '../util/modal';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS';
=======
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

export const openModal = (modal, data = {}) => {
  return {
    type: OPEN_MODAL,
    modal: modal,
    data: data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
<<<<<<< HEAD
};

const receiveSearchProducts = (products) => {
  return {
    type: RECEIVE_SEARCH_PRODUCTS,
    products: products
  }
}

export const fetchSearchProducts = input => dispatch => {

  return ModalApi.fetchSearchProducts(input).then(products => dispatch(receiveSearchProducts(products)))
}
=======
};
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
