import { combineReducers } from 'redux'
import app, { AppState } from 'redux/reducers/app'
import users, { UsersState } from 'redux/reducers/users'

export interface RootState {
  app: AppState
  users: UsersState
}

export default combineReducers({
  app,
  users
})
