export const fetchSearchProducts = (input) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/products`,
      data: { input }
    })
  )
}