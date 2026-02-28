import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: `${API}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api

export async function registerUser(payload) {
  const { data } = await api.post('/auth/register', payload)
  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data
}

export async function loginUser(payload) {
  const { data } = await api.post('/auth/login', payload)
  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data
}

export function logoutUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export async function fetchServices() {
  const { data } = await api.get('/services')
  return data
}

export async function createBooking(payload) {
  const { data } = await api.post('/bookings', payload)
  return data
}

export async function fetchMyBookings() {
  const { data } = await api.get('/bookings/me')
  return data
}
