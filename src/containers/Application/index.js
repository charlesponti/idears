import { AuthState } from '@aws-amplify/ui-components'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import AideaAuthenticator from 'src/components/Authenticator'
import ProfilePage from 'src/containers/ProfilePage'
import { UserContext } from 'src/providers/UserProvider'
import Ideas from '../Ideas'
// import styles from './Application.module.scss'

function Application () {
  const { authState, user } = useContext(UserContext)

  return (
    authState === AuthState.SignedIn && user
      ? (
        <Router>
          <Ideas path="ideas"/>
          <ProfilePage path="profile" user={user}/>
        </Router>
      )
      : <AideaAuthenticator/>
  )
}

Application.propTypes = {
  user: PropTypes.object,
  authState: PropTypes.string
}

export default Application
