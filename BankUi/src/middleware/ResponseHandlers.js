/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import constants from '../constants'

/**
 * Success Response Handler.
 *  @param {object} response - Success response from REST service.
 */
export function successHandlerGET(response) {
  const { statusText, status } = response
  return {
    success: true,
    message: statusText,
    statusCode: status,
    data: response.data,
  }
}

/**
 * Error Response Handler.
 *  @param {object} error - Error response from REST service.
 */
export function errorHandler(error, isNotify = true) {
  const { response } = error
  let msg
  let statusCode
  let data = {}

  if (response && response instanceof Object) {
    data = response.data
    const { statusText } = response
    statusCode = response.status
    msg = data.messageCode ? data.messageCode : data.error || statusText
  }

  if (statusCode === 403 || statusCode === 401) {
    if (localStorage.getItem(constants.auth.LOGIN_STORAGE_VAR)
      || sessionStorage.getItem(constants.auth.LOGIN_STORAGE_VAR)) {
      localStorage.removeItem(constants.auth.LOGIN_STORAGE_VAR)
      sessionStorage.removeItem(constants.auth.LOGIN_STORAGE_VAR)
      window.location.reload()
    }
  }
  if (isNotify) {
    // Notification(responseObj);
  }

  return {
    success: false,
    statusCode,
    message: msg,
    data,
  }
}

/**
 * Success Response Handler.
 *  @param {object} response - Success response from REST POST service.
 */
export function successHandlerPOST(response, isNotify = true) {
  const { status, headers, data } = response
  try {
    const responseObj = {
      success: true,
      status: data.status,
      message: data.messageCode,
      statusCode: status,
      data,
      headers,
    }
    if (isNotify) {
      // Notification(responseObj);
    }
    return responseObj
  } catch (e) {
    const responseObj = {
      success: false,
      message: e,
    }
    // Notification(responseObj);
  }
}

/**
 * Success Response Handler.
 *  @param {object} response - Success response from REST PUT service.
 */
export function successHandlerPUT(response, isNotify = true) {
  const { status, headers } = response
  try {
    const responseObj = {
      success: true,
      status: response.data.status,
      message: response.data.messageCode,
      statusCode: status,
      data: response.data,
      headers,
    }
    if (isNotify) {
      // Notification(responseObj);
    }

    return responseObj
  } catch (e) {
    const responseObj = {
      success: false,
      message: e,
    }
    // Notification(responseObj);
  }
}

export function successHandlerDELETE(response, isNotify = true) {
  const { headers, status } = response
  try {
    const responseObj = {
      success: true,
      status: response.data.status,
      message: response.data.messageCode,
      statusCode: status,
      data: response.data,
      headers,
    }
    if (isNotify) {
      // Notification(responseObj);
    }

    return responseObj
  } catch (e) {
    const responseObj = {
      success: false,
      message: e,
    }
    // Notification(responseObj);
  }
}
