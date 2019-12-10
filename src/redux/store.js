import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer';
//import postReducer from './postReducer'

//const rootReducer = combineReducers({ reducer, postReducer})


const store = createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))
  //or rootReducer instead of reducer for bundled reducers
  

  export default store