import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchProduct } from './actions/product_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
      }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchProduct = fetchProduct;
  
  const root = document.getElementById('root')

  ReactDOM.render(<Root store={store} />, root);
})

