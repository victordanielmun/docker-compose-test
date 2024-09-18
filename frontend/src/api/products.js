import axios from './axios'

export const uploadFile = (file) =>axios.post(`/upload`, file)

export const createDocument = (data) =>axios.post(`/createdocument`, data)

export const getBlob = (req) =>axios.get(`/getDocument/${req}`, req,)

export const getDocuments = (req) =>axios.get(`/documents`, req,)