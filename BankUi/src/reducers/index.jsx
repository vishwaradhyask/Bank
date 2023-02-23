import { combineReducers } from 'redux'

import WindowManager from './window'
import App from './app'
import MultiLang from '../i18n/reducer'
import RecoveryMedia from './recoveryMedia'

// import inventory from './inventory'

// import Auth from '../reducers/auth'

export default combineReducers({
  App,
  WindowManager,
  MultiLang,
  RecoveryMedia,
})
