export const TOGGLE_LOGGED_IN = 'TOGGLE_LOGGED_IN'

interface ToggleLoggedIn {
  type: 'TOGGLE_LOGGED_IN'
}

export type Actions = ToggleLoggedIn

export const toggleLoggedIn = (): ToggleLoggedIn => ({
  type: TOGGLE_LOGGED_IN
})
