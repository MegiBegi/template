import { combineReducers } from 'redux'
import app, { AppState } from 'redux/reducers/app'
import endpoints, { EndpointsState } from 'redux/reducers/endpoints'

export interface RootState {
  app: AppState
  endpoints: EndpointsState
}

export default combineReducers({
  app,
  endpoints
})
