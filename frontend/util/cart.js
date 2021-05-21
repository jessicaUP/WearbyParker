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
    url: `/carts/${cartId}`,
    method: 'DELETE'
  })
);