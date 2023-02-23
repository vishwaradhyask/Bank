// import languageMessage from '../../i18ntranslation'
import constants from '../constants'

/*
  General
*/
const sizeUnit = ['B', 'KB', 'MB', 'GB', 'TB']
const sizeUnitIb = ['B', 'KiB', 'MiB', 'GiB', 'TiB']

// inner function for "byteToSize"
const byteToSizeCalculate = (bytes) => {
  let unitIdx = 0
  let num = bytes
  let retNum = 0

  for (let i = 0; i < sizeUnit.length; i += 1) {
    retNum = num
    num /= 1024
    if (num >= 1) {
      unitIdx += 1
    } else {
      break
    }
  }

  return { retNum, unitIdx }
}

const byteToSize = (bytes, round = 2) => {
  const { retNum, unitIdx } = byteToSizeCalculate(bytes)
  if (!retNum || !unitIdx) {
    return '0 B'
  }
  return `${retNum.toFixed(round)} ${sizeUnit[unitIdx]}`
}

const paddingString = (data, length = 2, string = '0', direction = 'left') => {
  if (direction === 'left') {
    if (data.length >= length) {
      return data
    } else {
      return paddingString(`${string}${data}`, string, length, direction)
    }
  } else if (direction = 'right') {
    if (data.length >= length) {
      return data
    } else {
      return paddingString(`${data}${string}`, string, length, direction)
    }
  } else {
    return data
  }
}

const GetStatusText = (statusCode, intl) => {
  let code = statusCode
  try {
    code = parseInt(statusCode)
  } catch (error) {
    return intl.formatMessage({ id: 'BACKUP_JOBDETAILFULL_04' })
  }
  switch (code) {
    case 1:
      return intl.formatMessage({ id: 'COMMON_22' })
    case 2:
      return intl.formatMessage({ id: 'OVERVIEW_PANELJOB_02' })
    case 3:
      return intl.formatMessage({ id: 'OVERVIEW_PANELJOB_03' })
    case 4:
      return intl.formatMessage({ id: 'OVERVIEW_PANELJOB_04' })
    case 5:
      return intl.formatMessage({ id: 'OVERVIEW_PANELJOB_05' })
    case 6:
      return intl.formatMessage({ id: 'BACKUP_JOBDETAILFULL_04' })
    case 7:
      return intl.formatMessage({ id: 'COMMON_19' })
    case 8:
      return intl.formatMessage({ id: 'OVERVIEW_PANELJOB_06' })
    case 9:
      return intl.formatMessage({ id: 'JOBSTATUS_12' })
    case 10:
      return intl.formatMessage({ id: 'COMMON_20' })
    default:
      return intl.formatMessage({ id: 'BACKUP_JOBDETAILFULL_04' })
  }
}

const bytesToMegaBytes = bytes => bytes / (1024 * 1024)

const getColorOfText = (status) => {
  let clr = 'black'
  let colerStyle
  if (status === 1) {
    clr = 'green'
  } else if (status === 4) {
    clr = 'red'
  }
  return colerStyle = {
    color: clr
  }
}
/*
  For VM backup
*/

export {
  sizeUnit,
  sizeUnitIb,
  byteToSize,
  paddingString,
  bytesToMegaBytes,
  getColorOfText,
  GetStatusText
}
