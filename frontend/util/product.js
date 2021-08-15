export const fetchProduct = (productId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/products/${productId}`
    })
  )

<<<<<<< HEAD
} 

=======
} 
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
