export const postUser = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const postSession = user => (
  $.ajax({
    url: '/api/user',
    method: 'POST',
    data: { user }
  })
);



export const deleteSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);