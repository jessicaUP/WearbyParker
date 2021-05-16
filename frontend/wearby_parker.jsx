import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { id: window.currentUser }
      },
      session: { currentUser: window.currentUser }
      }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById('root')

  ReactDOM.render(<Root store={store} />, root);
})