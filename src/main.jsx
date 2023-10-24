import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import {logger} from './middlewares'
import thunk from 'redux-thunk'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk ,logger))

const store = createStore(pokemonsReducer, composedEnhancers)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
