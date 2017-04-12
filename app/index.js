import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { contentId } from './config'
import Item from './item'
import List from './list'
import LineGraph from './lineGraph'
import RadarGraph from './radarGraph'
import WarehouseNav from './warehouseNav'
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
        <RadarGraph />
        <WarehouseNav />
        <LineGraph />
      </div>
    }
  </Provider>,
  document.getElementById('root')
)
