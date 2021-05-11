export const login = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    url: '/api/user',
    method: 'POST',
    data: { user }
  })
);

export const logout = user => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);