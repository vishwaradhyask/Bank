import constants from '../constants'
import allLangStr from '../i18n/lang'
const defaultLang = localStorage.getItem('lang') || 'en'

const defaultState = {
  // isReady: true,
  isLoading: false,
  isLoading2: false,
  isLoading3: false,
  isLoading4: false,
  startLoadRepoDetail: false,
  lang: defaultLang, // TODO: make this default value by getting local storage or API
  langStr: allLangStr[defaultLang.toLowerCase()], // TODO: make this default value by getting local storage or API
  appVersion: { version: '', date: '', firmware: '' },
  sidebar: false,
  CMP:'login'
}

const setLanguage = (state, action) => {
  const { lang, systemLang } = action
  const langStr = allLangStr[lang]

  return {
    ...state,
    systemLang,
    langStr,
  }
}

export default function App(state = defaultState, action) {
  switch (action.type) {
    case constants.app.SHOW_LOADING:
      return { ...state, isLoading: true }
    case constants.app.HIDE_LOADING:
      return { ...state, isLoading: false }
    case constants.app.SHOW_LOADING2:
      return { ...state, isLoading2: true }
    case constants.app.HIDE_LOADING2:
      return { ...state, isLoading2: false }
    case constants.app.SHOW_LOADING3:
      return { ...state, isLoading3: true }
    case constants.app.HIDE_LOADING3:
      return { ...state, isLoading3: false }
    case constants.app.SHOW_LOADING4:
      return { ...state, isLoading4: true }
    case constants.app.HIDE_LOADING4:
      return { ...state, isLoading4: false }
    case constants.app.LOAD_REPO_DETAIL_START:
      return { ...state, startLoadRepoDetail: true }
    case constants.app.LOAD_REPO_DETAIL_STOP:
      return { ...state, startLoadRepoDetail: false }
    case constants.app.SET_CMP:
      return { ...state, CMP: action.data }
    case constants.app.SET_LANG:
      return setLanguage(state, action)
    case constants.globalAction.SAVE_VERSION:
      return { ...state, appVersion: { version: action.data.QPKG, date: action.data.date, firmware: action.data.firmware, platform: action.data.platform !== undefined ? action.data.platform : null } }
    // case constants.globalAction.SAVE_VERSION:
    //   return { ...state, appVersion: { version: action.data.QPKG, date: action.data.date, firmware: action.data.firmware, platform: action.data.platform !== undefined ? action.data.platform : null } }
    // case constants.app.TOGGLE_SIDEBAR:
    //   return { ...state, sidebar: !state.sidebar }
    default:
      return state
  }
}
