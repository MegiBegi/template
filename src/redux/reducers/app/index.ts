import * as actions from 'redux/actions/app'

export interface AppState {
  isSidebarOpen: boolean
}

const initialState: AppState = {
  isSidebarOpen: false
}

export default (state: AppState, action: actions.Actions): AppState => {
  switch (action.type) {
    case actions.TOGGLE_SIDEBAR_STATUS:
      return { ...state, isSidebarOpen: true }
    default:
      return initialState
  }
}
