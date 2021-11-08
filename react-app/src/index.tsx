import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Users from './components/Users/Users'
import {Provider} from 'react-redux'
import store from './store'

const usersNode = document.getElementById(`react-app-users`)

if (usersNode) {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <Users />
      </App>
    </Provider>,
    usersNode
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
