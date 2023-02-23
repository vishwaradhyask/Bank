/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import axios from 'axios'

import {
  successHandlerGET,
  errorHandler,
  successHandlerPOST,
  successHandlerPUT,
  successHandlerDELETE,
} from './ResponseHandlers'
import constants from '../constants'

/**
 * Axios default values.
 *  baseURL - add the root url
 */
axios.defaults.headers.common['Cache-Control'] = 'no-cache'
// axios.defaults.baseURL = `${window.location.origin}/vmbackup/api/`

/**
 * GET method to invoke service call.
 *  @param {string} url - end point.
 *  @param {object} params - query params
 */
export function GET(url, _params, notify, _headers) {
  const userInfo = JSON.parse(sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR))
  const token = userInfo ? `Bearer ${userInfo.token}` : ''
  const headers = { ..._headers, Authorization: token }

  // const params = { ..._params, sid: getCookie('NAS_SID') }
  const params = { ..._params }
  return axios.get(url, { params, headers })
    .then((response) => successHandlerGET(response))
    .catch((error) => errorHandler(error, notify))
}

export function GET_BLOB(url, params, notify, _headers) {
  const userInfo = JSON.parse(sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR))
  const token = userInfo ? `Bearer ${userInfo.token}` : ''
  const headers = { ..._headers, Authorization: token }

  return axios.get(url, { params, headers, responseType: 'blob' })
    .then((response) => successHandlerGET(response))
    .catch((error) => errorHandler(error, notify))
}
/**
 * POST method to invoke service call.
 *  @param {string} url - end point.
 *  @param {object} body - request body.
 */

export function POST(url, data, _params, successNotify, failureNotify, _headers) {
  const userInfo = JSON.parse(sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR))
  const token = userInfo ? `Bearer ${userInfo.token}` : ''
  const headers = { ..._headers, Authorization: token }
  const params = { ..._params }
  return axios.post(url, data, { params, headers })
    .then((response) => successHandlerPOST(response, successNotify))
    .catch((error) => errorHandler(error, failureNotify))
}

/**
 * PUT method to invoke service call.
 *  @param {string} url - end point.
 *  @param {object} body - request body.
 */

export function PUT(url, body, notify, _headers) {
  const userInfo = JSON.parse(sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR))
  const token = userInfo ? `Bearer ${userInfo.token}` : ''
  const headers = { ..._headers, Authorization: token }

  return axios.put(url, body, { headers })
    .then((response) => successHandlerPUT(response, notify))
    .catch((error) => errorHandler(error))
}

export function DELETE(url, data, _headers) {
  const userInfo = JSON.parse(sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR))
  const token = userInfo ? `Bearer ${userInfo.token}` : ''
  const headers = { ..._headers, Authorization: token }

  return axios.delete(url, { headers, data })
    .then((response) => successHandlerDELETE(response))
    .catch((error) => errorHandler(error))
}
