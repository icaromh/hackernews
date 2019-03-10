import React, { Component } from 'react';

import ApiService from '../services/Api'

class StoriesView extends Component {

  constructor(){
    super()

    this.state = {
      comments: [],
    }

  }

  loadContent() {
    this.setState({ isLoading: true })
    ApiService.getComments(this.state.page + 1)
    .then(data => {
      this.setState({
        items: [...this.state.items, ...data.items],
        page: parseInt(data.metadata.page, 10),
        isLoading: false,
      })
    })
    .catch(err => this.setState({
      isLoading: false,
      err,
    }))
  }

  render() {
    const { items } = this.state

    return false
  }
}

export default StoriesView;
