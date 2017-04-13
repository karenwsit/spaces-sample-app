import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { contentId } from './config'
import Dashboard from './dashboard'
import reducer from './reducer'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension
      ? window.devToolsExtension()
      : i => i
  )
)

ReactDOM.render(
  <Provider store={store}>
    {
      <div>
        <Dashboard />
      </div>
    }
  </Provider>,
  document.getElementById('root')
)
