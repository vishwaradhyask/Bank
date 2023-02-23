import {
    takeLatest, call, all, put, actionChannel,
  } from 'redux-saga/effects'
  import {
    GET, POST, PUT, DELETE,
  } from '../../middleware/RequestHandlers'
  import constants from '../../actions/recoveryConstants'
  import recoveryAction from '../../actions/recoveryMedia'
  import app from '../../actions/app'
  // import globalConstants from '../../../../../timebackUi/BaseReact/src/constants'

  export function* getUsbDisksfn(){
    let response = { success : false }
    try{
        response = yield call(GET, 'https://localhost:11172/get_usb_list')
        if (response.success) {
           yield put(recoveryAction.setUsbDisks(response))
        }
    } catch (e) {
        console.log("unable to get USB disks", e)
    }
  }

  export function* getAdkPathfn(action) {
    let response = { success : false }
    try{
        response = yield call(GET, 'https://localhost:11172/get_adk_path')
    } catch (e) {
        console.log("unable to get ADK Path", e)
    } finally {
      if(action.callback) action.callback(response)
    }
  }

  export function* downloadAdkfn(action) {
    let response = { success : false }
    const payload = { get_file: action.fileName}
    try{
        response = yield call(POST, 'https://localhost:11172/download_adk', payload)
        console.log("ADK Responseeeee")
    } catch (e) {
        console.log("unable to download Adk", e)
    } finally {
      if(action.callback) action.callback(response)
    }
  }

  export function* getProgressfn(action) {
    let response = { success : false }
    try{
        response = yield call(GET, 'https://localhost:11172/download_progress')
        console.log("progress Responseeeee", response)
    } catch (e) {
        console.log("unable to get download progress", e)
    } finally {
      if(action.callback) action.callback(response)
    }
  }

  export function* createBootablefn(action) {
    let response = { success : false }
    console.log("acctttttionnnn", action)
    const payload = { selected: {...action.selectedUsb}}
    try{
        response = yield call(POST, 'https://localhost:11172/create_bootable', payload)
        console.log("bootable Responseeeee", response)
    } catch (e) {
        console.log("unable to create bootable", e)
    } finally {
      if(action.callback) action.callback(response)
    }
  }

  function* getLanguage(action) {
    let langString = ['en', 'cz', 'da', 'de', 'dut', 'es', 'fi', 'fr', 'grk', 'hun', 'it', 'ja', 'ko', 'no', 'pl', 'por', 'rom', 'ru', 'svse', 'tha', 'tur', 'zh-cn', 'zh-tw']
    const token = {
      "X-AppIToken": ""
    }
    try {
        const response = yield call(GET, 'https://localhost:11172/lang', "", "", token)
        console.log("getLang----------", response)
        if (response.success) {
          let lang = response.data && response.data.body && response.data.body.length > 0 ? response.data.body[0].lang : 'en'
          // lang =  lang === 'zhtw' ? 'zh-tw' : lang === 'zhcn' ? 'zh-cn' : lang
          if (langString.includes(lang)) {
            yield put(app.setLang(lang))
          } else {
            lang = 'en'
            yield put(app.setLang(lang))
          }
        }
    } catch (e) {
        console.log("Failed to get events", e)
    }
  }

  export default function* RecoveryService() {
    yield all([
      takeLatest(constants.GET_USB_DISKS, getUsbDisksfn),
      takeLatest(constants.GET_ADK_PATH, getAdkPathfn),
      takeLatest(constants.DOWNLOAD_ADK, downloadAdkfn),
      takeLatest(constants.GET_PROGRESS, getProgressfn),
      takeLatest(constants.CREATE_BOOTABLE, createBootablefn),
      takeLatest(constants.GET_LANG, getLanguage),
    ])
  }