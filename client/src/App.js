import React, { Component } from 'react';
import Layout from './views/Layout'
import LoginView from './views/Login'
import StoriesView from './views/Stories'

import TokenManager from './services/TokenManager'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      items: [],
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
    const { items, isLoggedIn } = this.state
    return (
      <Layout>
        {!isLoggedIn && <LoginView onLogin={() => this.handleLogin()} /> }
        {isLoggedIn && <StoriesView items={items} />}
      </Layout>
    );
  }
}

export default App;
