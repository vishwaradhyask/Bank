import constants from '../constants'

export const minWindow = (winId) => ({ type: constants.windowAction.MIN_WINDOW, winId })

export const openWindow = (winId, renderCmp, metadata) => ({
  type: constants.windowAction.OPEN_WINDOW, winId, renderCmp, metadata,
})

export const closeWindow = (winId) => ({ type: constants.windowAction.CLOSE_WINDOW, winId })

export const topWindow = (winId) => ({ type: constants.windowAction.TOP_WINDOW, winId })

export const maskWindow = (winId, mask) => ({
  type: constants.windowAction.MASK_WINDOW, winId, mask,
})

export const unmaskWindow = (winId) => ({ type: constants.windowAction.UNMASK_WINDOW, winId })

export const restoreWindow = (winId) => ({ type: constants.windowAction.RESTORE_WINDOW, winId })

export const updateWindowManager = (key, value) => ({
  type: constants.windowAction.UPDATE_WINDOW_MANAGER, key, value,
})

export const updateMetadata = (winId, key, value) => ({
  type: constants.windowAction.UPDATE_METADATA,
  winId,
  key,
  value,
})
