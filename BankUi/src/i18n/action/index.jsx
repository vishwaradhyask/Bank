import constants from '../../constants'

const { SET_LANG } = constants.app

export const setLang = lang => ({ type: SET_LANG, lang })
