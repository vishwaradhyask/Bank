import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSagas from './middleware/RootSaga'

import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)

const store = createStore(
  rootReducer,
  enhancer,
)

sagaMiddleware.run(rootSagas)

export default store
