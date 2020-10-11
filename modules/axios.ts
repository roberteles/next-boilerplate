import axios from 'axios'
import { DateTime } from 'luxon'

export const URL = {
  protocol: process.env.PROTOCOL,
  appBase: process.env.APP_BASE,
  apiBase: process.env.API_BASE,
  appURL: '',
  apiURL: '',
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  const expiresAt = localStorage.getItem('expires')
  if (!expiresAt) return null

  // check if expires is in the past
  if (DateTime.fromISO(expiresAt) <= DateTime.local()) {
    return null
  }

  return token
}

export const setHeaders = async () => {
  const token = getToken()
  if (!token) return

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  return true
}

export const baseURL = async () => {
  URL.apiURL = `${URL.protocol}://${URL.apiBase}/v1`
  URL.appURL = `${URL.protocol}://${URL.appBase}`
  
  axios.defaults.baseURL = URL.apiURL

  return true
}

export const req = () => axios
