export const fetchCartItem = (cartId) => (
  $.ajax({
    method: 'GET',
    url: `/api/cart_items/${cartId}`
  })
)

export const postCartItem = cartItem => (
  $.ajax({
    url: '/api/cart_items',
    method: 'POST',
    data: { cartItem }
  })
);

export const updateCartItem = cartItemId => (
  $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: 'PATCH'
  })
)

export const deleteCartItem = cartItemId => (
  $.ajax({
    url: `/cart_items/${cartItemId}`,
    method: 'DELETE'
  })
);