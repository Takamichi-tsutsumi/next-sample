import { createStore } from 'redux'
import reducer from './modules'

export const makeStore = (initialState, options) => {
  return createStore(reducer, initialState)
}