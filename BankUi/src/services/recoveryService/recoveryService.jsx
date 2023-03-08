import {
  takeLatest, call, all, put, actionChannel,
} from 'redux-saga/effects'
import {
  GET, POST, PUT, DELETE,
} from '../../middleware/RequestHandlers'
// import constants from '../../actions/recoveryConstants'
import constant from '../../constants'
import recoveryAction from '../../actions/recoveryMedia'
import app from '../../actions/app'
// import globalConstants from '../../../../../timebackUi/BaseReact/src/constants'

export function* login(action) {
  console.log('action:', action)
  let response = { success: false }
  let payload = {
    "username": action.data.username,
    "password": action.data.password
  }
  try {
    let header = {"Authorization":"Token 7834eea6efbddb0cd26a6aa45ba72fe0687bd42c"}
    let resp = yield call(GET, 'http://127.0.0.1:4000/fetch_saving_account', "", "", header)
    console.log('get the $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$: resp:', resp)
    response = yield call(POST, 'http://localhost:4000/api-token-auth/', payload)
    console.log('resp:', response)
    if (action.callback) action.callback(response)
    // if (response.success) {
    //    yield put(recoveryAction.setUsbDisks(response))
    // }
  } catch (e) {
    console.log("unable to get USB disks", e)
  }
}

export default function* RecoveryService() {
  yield all([
    takeLatest(constant.app.LOG_IN, login),
  ])
}