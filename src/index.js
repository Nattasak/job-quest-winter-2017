import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import './index.css'

const enhancer = compose(
  persistState(),
)

const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
