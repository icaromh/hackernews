import React, { Component } from 'react';
import Layout from './views/Layout'
import LoginView from './views/Login'
import StoriesView from './views/Stories'

import TokenManager from './services/TokenManager'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  componentWillMount() {
    const token = TokenManager.get()
    if(token) {
      this.setState({ isLoggedIn: true })
    }
  }

  handleLogin(){
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <Layout>
        {!isLoggedIn && <LoginView onLogin={() => this.handleLogin()} /> }
        {isLoggedIn && <StoriesView />}
      </Layout>
    );
  }
}

export default App;
