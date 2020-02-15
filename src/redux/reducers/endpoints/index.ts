import * as actions from 'redux/actions/endpoints'
import { Nullable } from 'types'

export type Endpoints = Nullable<{
  [endpoint: string]: string
}>

export interface EndpointsState {
  endpoints: Endpoints
}

const initialState: EndpointsState = {
  endpoints: null
}

export default (
  state: EndpointsState,
  action: actions.ActionsEndpoints
): EndpointsState => {
  switch (action.type) {
    case actions.FETCH_ENDPOINTS_SUCCESS:
      return { ...state, endpoints: action.payload.endpoints }
    default:
      return initialState
  }
}
