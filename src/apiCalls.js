export const login = async loginInfo => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify(loginInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Please check that your username & password are correct.')
  }
  const user = await response.json();
  return user;
}

export const getTeammates = async userId => {
  const url = `http://localhost:3001/api/v1/users/${userId}/teammates`;

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Unable to find user\'s teammates.')
  }
  const user = await response.json();
  return user;
}