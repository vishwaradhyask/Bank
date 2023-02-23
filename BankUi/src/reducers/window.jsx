// import { ACTION_LIST, WINDOW_TYPE } from '../NCType';
// constants.windowAction
// constants.windowType
import constants from '../constants'

// declare interface WINDOW_STATE {
//   winId,
//   status
//   type: WINDOW_TYPE
//   metadata: any
//   isMasked?: boolean
//   renderCmp?: string
//   children?: any
// }

// declare interface DIALOG extends WINDOW_STATE{
//   fbarBtns?:Array<any>
// }

const moveWindowToTop = (windows, targetWindow) => [...removeWindow(
  windows, targetWindow,
), targetWindow]

const removeWindow = (windows, targetWindow) => windows.filter((window) => window !== targetWindow)

const getNewWindowState = () => ({
  winId: '', status: 'open', type: constants.windowType.STANDARD, metadata: {},
})

const getNewDialogWindowState = () => ({
  winId: '', status: 'open', type: constants.windowType.DIALOG, metadata: {},
})

let windowCnt = 0

const getWindowID = () => {
  return `win-${++windowCnt}`
}

const getWindowState = (windows, winId) => {
  return windows[winId] || getNewWindowState()
}

const getParentWindowRelaction = (relation, parentWinId) =>{
  return { [parentWinId]: relation[parentWinId] || [] }
}

export default function WindowManager(state, action) {
  if (!state) {
    state = {
      order: [],
      min: [],
      windows: {},
      backgroundMask: false,
      relaction: {},
    }
  }

  let isWindowAct = false
  let { order, min, relaction } = state
  const winId = action.winId || getWindowID()
  let {
    windows: allWindowState,
    windows: { [winId]: windowState },
  } = state
  let windowRelaction
  let parentWinId

  switch (action.type) {
    case constants.windowAction.UNMASK_WINDOW:
      windowState.isMasked = false
      isWindowAct = true
      break
    case constants.windowAction.MASK_WINDOW:
      windowState.isMasked = action.mask
      isWindowAct = true
      break
    case constants.windowAction.OPEN_WINDOW:
      windowState = getWindowState(allWindowState, winId)
      state.order.push(winId)
      order = moveWindowToTop(state.order, winId)
      min = removeWindow(state.min, winId)
      isWindowAct = true

      windowState = {
        ...windowState,
        renderCmp: action.renderCmp,
        winId,
        status: 'open',
        metadata: action.metadata || {},
      }

      parentWinId = windowState.metadata.parentWin
      if (parentWinId) {
        windowRelaction = getParentWindowRelaction(relaction, parentWinId)
        windowRelaction[parentWinId].push(winId)
      }

      break
    case constants.windowAction.RESTORE_WINDOW:
      windowState = getWindowState(allWindowState, winId)
      state.order.push(winId)
      order = moveWindowToTop(state.order, winId)
      min = removeWindow(state.min, winId)
      isWindowAct = true

      windowState = {
        ...windowState,
        winId,
        status: 'open',
      }
      break
    case constants.windowAction.MIN_WINDOW:
      windowState = getWindowState(allWindowState, winId)
      windowState.status = 'min'
      min.push(winId)
      order = moveWindowToTop(state.order, winId)
      isWindowAct = true
      break
    case constants.windowAction.CLOSE_WINDOW:
      if (!state.windows[winId]) break
      windowState = getWindowState(allWindowState, winId)
      parentWinId = windowState.metadata.parentWin
      // parent relaction
      if (parentWinId) {
        windowRelaction = getParentWindowRelaction(relaction, parentWinId)
        windowRelaction = { [parentWinId]: removeWindow(windowRelaction[parentWinId], winId) }
        if (windowRelaction[parentWinId].length === 0) {
          windowRelaction = { [parentWinId]: undefined }
        }
      }

      windowState.status = 'close'
      windowState.metadata = {}

      min = removeWindow(state.min, winId)
      isWindowAct = true
      break
    case constants.windowAction.TOP_WINDOW:
      windowState = getWindowState(allWindowState, winId)
      parentWinId = windowState.metadata.parentWin
      // top parent window
      if (parentWinId) {
        order = moveWindowToTop(state.order, parentWinId)

        // top parent child window
        if (state.relaction[parentWinId]) {
          state.relaction[parentWinId].map(childWinId =>
            order = moveWindowToTop(order, childWinId),)
        }
      } else {
        order = state.order
      }

      // top self
      order = moveWindowToTop(order, winId)

      // top self child
      if (state.relaction[winId]) {
        state.relaction[winId].map(childWinId =>
          order = moveWindowToTop(order, childWinId),
        )
      }

      isWindowAct = true
      break
    case constants.windowAction.SERVICE_UNAVAILABLE:
      windowState = {
        ...getNewDialogWindowState(),
        winId,
        children: action.msg,
        fbarBtns: action.fbarBtn,
        metadata: action.metadata,
      }

      state.order.push(winId)
      order = moveWindowToTop(state.order, winId)
      min = removeWindow(state.min, winId)
      isWindowAct = true
      break
    case constants.windowAction.UPDATE_METADATA:
      return {
        ...state,
        windows: {
          ...state.windows,
          [action.winId]: {
            ...state.windows[action.winId],
            metadata: {
              ...state.windows[action.winId].metadata,
              [action.key]: action.value,
            },
          },
        },
      }
    case constants.windowAction.UPDATE_WINDOW_MANAGER:
      return {
        ...state,
        [action.key]: action.value,
      }
    default:
      break
  }

  if (!isWindowAct) {
    return state
  }

  return {
    ...state,
    windows: { ...allWindowState, [winId]: windowState },
    relaction: { ...relaction, ...windowRelaction },
    order,
    min,
  }
}
