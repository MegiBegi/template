import { createStore } from 'redux'
import RootReducer from 'redux/reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(RootReducer, devToolsEnhancer({}))
