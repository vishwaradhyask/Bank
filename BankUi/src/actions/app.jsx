import constants from '../constants'

const appAction = {
  showLoading: () => ({ type: constants.app.SHOW_LOADING }),
  hideLoading: () => ({ type: constants.app.HIDE_LOADING }),
  showLoading2: () => ({ type: constants.app.SHOW_LOADING2 }),
  hideLoading2: () => ({ type: constants.app.HIDE_LOADING2 }),
  showLoading3: () => ({ type: constants.app.SHOW_LOADING3 }),
  hideLoading3: () => ({ type: constants.app.HIDE_LOADING3 }),
  showLoading4: () => ({ type: constants.app.SHOW_LOADING4 }),
  hideLoading4: () => ({ type: constants.app.HIDE_LOADING4 }),
  startLoadRepoDetail: () => ({ type: constants.app.LOAD_REPO_DETAIL_START }),
  stopLoadRepoDetail: () => ({ type: constants.app.LOAD_REPO_DETAIL_STOP }),
  setLang: lang => ({ type: constants.app.SET_LANG, lang }),
  getVersion: () => ({ type: constants.globalAction.GET_VERSION }),
  saveVersion: data => ({ type: constants.globalAction.SAVE_VERSION, data }),
  toggleSidebar: () => ({ type: constants.app.TOGGLE_SIDEBAR }),
}

export default appAction
