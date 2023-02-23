import en from '../i18n/en.json'
import zhtw from '../i18n/zh-tw.json'

const variable = {}
Object.keys(en).forEach((k) => {
  variable[k] = k
})

export default {
  en,
  'zh-tw': zhtw,
  variable,
}
