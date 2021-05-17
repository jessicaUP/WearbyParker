export const fetchGenderProducts = (genderId) => (
  $.ajax({
    method: 'GET',
    url: `/api/genders/${genderId}`
  })
)