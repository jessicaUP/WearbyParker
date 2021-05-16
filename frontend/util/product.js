export const fetchProduct = (productId) = (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
)