export const fetchCart = () => (
  $.ajax({
    method: 'GET',
    url: `/api/carts`
  })
)

export const postCart = cart => (
  $.ajax({
    url: '/api/carts',
    method: 'POST',
    data: { cart }
  })
);

export const deleteCart = cartId => (
  $.ajax({
<<<<<<< HEAD
    url: `/api/carts/${cartId}`,
=======
    url: `/carts/${cartId}`,
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    method: 'DELETE'
  })
);