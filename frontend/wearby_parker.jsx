import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    preloadedState = {
      entitities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
      }
    };
  
  const root = document.getElementById('root')
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
})