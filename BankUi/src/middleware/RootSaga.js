import { all, fork } from 'redux-saga/effects'
import RestRootSagas from '../services'


export default function* rootSagas() {
  yield all([
    fork(RestRootSagas),
  ])
}
