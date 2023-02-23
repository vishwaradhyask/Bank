/* eslint-disable camelcase */
import RestoreConstants from '../actions/restoreConstants'

const eventDefault = {
  restoreTable: [],
  windowsRestoreTable: [],
  summary: {
    transport_compression: false,
    transport_encryption: true,
    restore_mode: '',
    restore_mode_selected: false,
    buttonDisable: false,
    restoreJobId: '',
    initializationPage: false,
    systemVolumeMissMatchedPopUp: false,
    scriptExecutionFailed: false,
    IpData: {},
    DnsServerData: {},
    clearDisk: false,
    restoreTable: ''
  },
  progressData: {},
  selectedRestoreJob: {},
  finalPage: false
}

function setRestoreTable(state, action) {
  switch (action.vmType) {
    case 'timeback':
      return { ...state, windowsRestoreTable: action.payload }
    default:
      return { ...state, restoreTable: action.payload }
  }
}

function setRestoreSummary(state, action) {
  const { summary } = state
  switch (action.key) {
    case 'transport_encryption':
    case 'transport_compression':
    case 'restore_mode':
    case 'restore_mode_selected':
    case 'buttonDisable':
    case 'systemVolumeMissMatchedPopUp':
    case 'initializationPage':
    case 'scriptExecutionFailed':
    case 'IpData':
    case 'DnsServerData':
    case 'clearDisk':
      return { ...state, summary: { ...summary, [action.key]: action.value } }
    case 'clear':
      return { ...state, summary: eventDefault.summary }
    default:
      return state
  }
}

function selectRestoreJob(state, action) {
  return { ...state, selectedRestoreJob: action.data }
}

function setRestoreJobID(state, action) {
  const { summary } = state
  return { ...state, summary: { ...summary, restoreJobId: action.jobId } }
}

function setRestoreProgress(state, action) {
  const { summary } = state
  return { ...state, summary: { ...summary, progressData: action.data } }
}

export default function reducer(state = eventDefault, action) {
  switch (action.type) {
    case RestoreConstants.SET_RESTORE_TABLE:
      return setRestoreTable(state, action)
    case RestoreConstants.SET_RESTORE_SUMMARY:
      return setRestoreSummary(state, action)
    case RestoreConstants.SELECT_RESTORE_JOB:
      return selectRestoreJob(state, action)
    case RestoreConstants.SET_JOB_ID:
      return setRestoreJobID(state, action)
    case RestoreConstants.SET_RESTORE_PROGRESS:
      return { ...state, progressData: action.data }
    case RestoreConstants.SET_FINAL_PAGE:
      return { ...state, finalPage: action.data }
    case RestoreConstants.SET_RESTORE_TABLE:
      return { ...state, restoreTable: action.data }
    default:
      return state
  }
}
