import constants from '../constants'

const appAction = {
  showLoading: () => ({ type: constants.app.SHOW_LOADING }),
  hideLoading: () => ({ type: constants.app.HIDE_LOADING }),
  setCmp: (data) => ({ type: constants.app.SET_CMP, data }),
  login: (data, callback) => ({ type: constants.app.LOG_IN, data, callback }),
}

export default appAction
