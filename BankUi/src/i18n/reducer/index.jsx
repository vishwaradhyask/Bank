import constants from '../../constants'
import allLangStr from '../lang'

const defaultLang = 'en'

const { SET_LANG } = constants.app

const defaultState = {
  lang: defaultLang,
  langStr: allLangStr[defaultLang],
}

const setLanguage = (state, action) => {
  try {
    let { systemLang } = action
    const langUpper = systemLang.toUpperCase()
    // if (langUpper === 'FR-FR' || langUpper.indexOf('FR') !== -1 || langUpper.indexOf('IN') !== -1) systemLang = 'IND'
    // else 
    systemLang = 'en'
    const langStr = allLangStr[systemLang]
    return {
      ...state,
      systemLang,
      langStr,
    }
  } catch (error) {
    return {
      ...state,
    }
  }
}

export default function MultiLang(state = defaultState, action) {
  switch (action.type) {
    case SET_LANG:
      return setLanguage(state, action)
    default:
      return state
  }
}
