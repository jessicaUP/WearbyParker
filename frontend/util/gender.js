export const fetchGenderProducts = (genderId) => (
  $.ajax({
    method: 'GET',
    url: `/api/genders/${genderId}`
  })
<<<<<<< HEAD
)

export const fetchGenderSearchProducts = (data) => (
  $.ajax({
    method: 'GET',
    url: `/api/genders`,
    data: data
  })
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
)