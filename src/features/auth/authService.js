import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/'


// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register/', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response.content)
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login/', userData)

  console.log(response.data)
  localStorage.clear();
  localStorage.setItem('user', JSON.stringify(response.data.user));
  axios.defaults.headers.common['Authorization'] = 
                                  `Bearer ${response['access']}`;
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const getUsers = async () => {
  const response = await axios.get(API_URL + 'users/')
  console.log('users')
  console.log(response.data)

  return response.data
}
const authService = {
  register,
  logout,
  login,
  getUsers
}

export default authService
