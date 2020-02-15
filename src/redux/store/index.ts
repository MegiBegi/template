import { createStore, applyMiddleware } from 'redux'
import RootReducer from 'redux/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export default createStore(RootReducer, composedEnhancers)
