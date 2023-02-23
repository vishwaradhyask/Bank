import { fork, all } from 'redux-saga/effects'
import RecoveryService from './recoveryService/recoveryService'

export default function* RestRootSagas() {
  yield all([
    fork(RecoveryService)
  ])
}
