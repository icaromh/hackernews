import React, { Component, Fragment } from 'react';
import { Waypoint } from 'react-waypoint';

import BackgroundCanvas from '../components/BackgroundCanvas'
import Loading from '../components/Loading'

import StoryView from './Story'

import ApiService from '../services/Api'

class StoriesView extends Component {

  constructor(){
    super()

    this.state = {
      items: [],
      isLoading: true,
      page: 0,
    }

  }

  loadContent() {
    this.setState({ isLoading: true })
    ApiService.getStories(this.state.page + 1)
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

  componentWillMount() {
    this.loadContent()
  }

  renderWaypoint() {
    const { isLoading } = this.state

    if (isLoading) {
      return (<Loading />)
    }

    return (
      <Fragment>
        <Waypoint
          topOffset='80%'
          onEnter={() => this.loadContent()}
        >
        </Waypoint>
        <Loading />
      </Fragment>
    )
  }

  render() {
    const { items } = this.state

    return (
      <BackgroundCanvas>
        {items.map((el, i) => (
          <StoryView data={el} key={i} n={i} />
        ))}

        {this.renderWaypoint()}
      </BackgroundCanvas>
    );
  }
}

export default StoriesView;
