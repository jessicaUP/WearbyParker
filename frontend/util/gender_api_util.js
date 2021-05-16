export const fetchGender = (genderId) = (
  $.ajax({
    method: 'GET',
    url: `/api/genders/${genderId}`
  })
)