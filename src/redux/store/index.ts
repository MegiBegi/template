import { createStore, applyMiddleware } from 'redux'
import RootReducer from 'redux/reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export default createStore(RootReducer, composedEnhancers)
