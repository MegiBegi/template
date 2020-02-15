import React, { FC } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/reducers'
import * as appActions from 'redux/actions/app'
import * as usersActions from 'redux/actions/users'
import { Noop } from 'types'

interface AppStateProps {
  isSidebarOpen: boolean
  isLoggedIn: boolean
}

interface AppDispatchProps {
  toggleSidebarStatus: Noop
  toggleLoggedIn: Noop
}

interface AppProps extends AppStateProps, AppDispatchProps {}

const App: FC<AppProps> = () => {
  return <div />
}

const mapStateToProps = (state: RootState): AppStateProps => ({
  isSidebarOpen: state.app.isSidebarOpen,
  isLoggedIn: state.users.isLoggedIn
})

const mapDispatchToProps: AppDispatchProps = {
  toggleSidebarStatus: appActions.toggleSidebarStatus,
  toggleLoggedIn: usersActions.toggleLoggedIn
}

export default connect<AppStateProps, AppDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(App)
