import React, { Component, Fragment } from 'react';
import Link from '../components/Link'
import GithubIcon from '../components/Icons'
import WelcomeBox from '../components/WelcomeBox'

import {
  WHITE,
  LOGIN_ENDPOINT,
} from '../constants'

import {
  getTokenFromURL,
  removeTokenFromURL,
} from '../services/URL'

import TokenManager from '../services/TokenManager'


class LoginView extends Component {

  componentWillMount() {
    const token = getTokenFromURL()
    if (token) {
      TokenManager.save(token)
      removeTokenFromURL()
      this.props.onLogin(token)
    }
  }


  render() {
    return (
      <Fragment>
        <WelcomeBox />
        <Link href={LOGIN_ENDPOINT}>
          <GithubIcon fill={WHITE} /> Login with Github
        </Link>
      </Fragment>
    );
  }
}

export default LoginView;
