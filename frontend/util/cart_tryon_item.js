export const fetchCartTryonItem = (cartTryonId) => (
  $.ajax({
    method: 'GET',
    url: `/api/cart_tryon_items/${cartTryonId}`
  })
);

export const postCartTryonItem = cartTryonItem => (
  $.ajax({
    url: '/api/cart_tryon_items',
    method: 'POST',
    data: { cartTryonItem }
  })
);

export const updateCartTryonItem = cartTryonItemId => (
  $.ajax({
    url: `/api/cart_tryon_items/${cartTryonItemId}`,
    method: 'PATCH'
  })
);

export const deleteCartTryonItem = cartTryonItemId => (
  $.ajax({
    url: `/api/cart_tryon_items/${cartTryonItemId}`,
    method: 'DELETE'
  })
);