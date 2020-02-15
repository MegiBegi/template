import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from 'redux/reducers'
import { Endpoints } from 'redux/reducers/endpoints'

export const FETCH_ENDPOINTS_START = 'FETCH_ENDPOINTS_START'
export const FETCH_ENDPOINTS_ERROR = 'FETCH_ENDPOINTS_ERROR'
export const FETCH_ENDPOINTS_SUCCESS = 'FETCH_ENDPOINTS_SUCCESS'

interface ActionFetchEndpointsStart {
  type: 'FETCH_ENDPOINTS_START'
}

interface ActionFetchEndpointsError {
  type: 'FETCH_ENDPOINTS_ERROR'
  payload: {
    message: string
  }
}

interface ActionFetchEndpointsSuccess {
  type: 'FETCH_ENDPOINTS_SUCCESS'
  payload: {
    endpoints: Endpoints
  }
}

export type ActionsEndpoints =
  | ActionFetchEndpointsStart
  | ActionFetchEndpointsError
  | ActionFetchEndpointsSuccess

const fetchEndpointsStart = (): ActionFetchEndpointsStart => ({
  type: FETCH_ENDPOINTS_START
})

const fetchEndpointsError = (message: string): ActionFetchEndpointsError => ({
  type: FETCH_ENDPOINTS_ERROR,
  payload: {
    message
  }
})

const fetchEndpointsSuccess = (
  endpoints: Endpoints
): ActionFetchEndpointsSuccess => ({
  type: FETCH_ENDPOINTS_SUCCESS,
  payload: {
    endpoints
  }
})

export const fetchEndpoints = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  Action<string>
> => dispatch => {
  dispatch(fetchEndpointsStart())

  return axios('https://swapi.co/api/s')
    .then(({ data }) => {
      dispatch(fetchEndpointsSuccess(data))
    })
    .catch(response => {
      dispatch(fetchEndpointsError(response))
    })
}
