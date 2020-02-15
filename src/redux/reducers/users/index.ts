import * as actions from 'redux/actions/users'

export interface UsersState {
	isLoggedIn: boolean
}

const initialState: UsersState = {
	isLoggedIn: false
}

export default (state: UsersState, action: actions.Actions): UsersState => {
	switch (action.type) {
		case actions.TOGGLE_LOGGED_IN:
			return { ...state, isLoggedIn: true }
		default:
			return initialState
	}
}
