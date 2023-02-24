import 'intl';
import 'intl/locale-data/jsonp/en';
import { PopupProvider } from "react-custom-popup";
import 'babel-polyfill'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es/symbol';
// import 'core-js/es/object';
// import 'core-js/es/function';
// import 'core-js/es/parse-int';
// import 'core-js/es/parse-float';
// import 'core-js/es/number';
// import 'core-js/es/math';
// import 'core-js/es/string';
// import 'core-js/es/date';
// import 'core-js/es/array';
// import 'core-js/es/regexp';
// import 'core-js/es/map';
// import 'core-js/es/weak-map';
// import 'core-js/es/set';
// import 'core-js/es/reflect';
// import 'core-js/es7/reflect';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import MainApp from './App'
import store from './store'
import MultiLang from './i18n/multilang'

import './index.scss'
import './qcss/main.scss'

try {
  // let Intl = require('Intl')
  // global.Intl = require('intl')
} catch (error) {
  console.log(error)
}

ReactDOM.render(
  <Provider store={store}>
    <MultiLang>
      <HashRouter>
        <PopupProvider>
          <MainApp />
        </ PopupProvider>
      </HashRouter>
    </MultiLang>
  </Provider>,
  document.getElementById('root'),
)
