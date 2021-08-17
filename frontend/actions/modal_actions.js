import * as ModalApi from '../util/modal';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS';

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
