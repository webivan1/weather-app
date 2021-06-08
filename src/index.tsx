import React from 'react'
import ReactDOM from 'react-dom'
import './style/normalize.css'
import './style/index.css'
import { App } from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
