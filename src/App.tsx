import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/reducers'
import * as appActions from 'redux/actions/app'
import * as endpointsActions from 'redux/actions/endpoints'
import { Noop } from 'types'
import { Endpoints } from 'redux/reducers/endpoints'

interface AppStateProps {
  isSidebarOpen: boolean
  endpoints: Endpoints
}

interface AppDispatchProps {
  toggleSidebarStatus: Noop
  fetchEndpoints: Noop
}

interface AppProps extends AppStateProps, AppDispatchProps {}

const App: FC<AppProps> = ({ fetchEndpoints }) => {
  const componentDidMount = (): void => {
    fetchEndpoints()
  }

  useEffect(componentDidMount, [])

  return <div />
}

const mapStateToProps = (state: RootState): AppStateProps => ({
  isSidebarOpen: state.app.isSidebarOpen,
  endpoints: state.endpoints.endpoints
})

const mapDispatchToProps: AppDispatchProps = {
  toggleSidebarStatus: appActions.toggleSidebarStatus,
  fetchEndpoints: endpointsActions.fetchEndpoints
}

export default connect<AppStateProps, AppDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(App)
