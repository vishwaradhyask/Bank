
import constants from '../constants'
import recoveryConstants from '../actions/recoveryConstants'

const defaultState = {
    usbList: {},
    isUsbRunning: false
}

function saveUsbList(state,action) {
  console.log("USBBBB action", action.payload)
  if (action.payload && action.payload.data) {
    const { body } = action.payload.data
    console.log("booooodyyyy", body)
    return Object.assign({}, state, {
        usbList: {...body},
    })
  }
  return state
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
      case recoveryConstants.SET_USB_DISKS:
        return saveUsbList(state, action)
      case recoveryConstants.SET_USB_PROGRESS:
        return { ...state, isUsbRunning: action.bool }
      default:
        return state
    }
  }