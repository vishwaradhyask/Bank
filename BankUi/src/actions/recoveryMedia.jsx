import constants from "./recoveryConstants"
const recoveryAction = {
    getUsbDisks: () => ({ type: constants.GET_USB_DISKS }),
    setUsbDisks: (data) => ({ type: constants.SET_USB_DISKS, payload: data }),
    getAdkPath: (callback) => ({ type: constants.GET_ADK_PATH, callback }),
    downloadAdk: (fileName, callback) => ({ type: constants.DOWNLOAD_ADK, fileName, callback}),
    getProgress: (callback) => ({ type: constants.GET_PROGRESS, callback}),
    createBootable: (selectedUsb, callback) => ({ type: constants.CREATE_BOOTABLE, selectedUsb, callback}),
    setUsbProgress: (bool) => ({ type: constants.SET_USB_PROGRESS, bool}),
    getLanguage: () => ({ type: constants.GET_LANG }),
}

export default recoveryAction