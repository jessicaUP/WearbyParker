export const fetchGenderProducts = (genderId) => (
  $.ajax({
    method: 'GET',
    url: `/api/genders/${genderId}`
  })
)

export const fetchGenderSearchProducts = (data) => (
  $.ajax({
    method: 'GET',
    url: `/api/genders`,
    data: data
  })
)