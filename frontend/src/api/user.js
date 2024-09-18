import axios from './axios'

export const getRegister = user =>axios.post(`/register`, user)

export const getLogin = user =>axios.post(`/login`, user)

export const verifyTokenRequest = () =>axios.get(`/verify-token`)

export const getLogout = (req) =>axios.get(`/logout`, req)

export const getUsersNames = (keys) =>axios.post(`/users`, keys)