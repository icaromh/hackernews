import React, { Component } from 'react'

import Story from '../components/Story'
import CommentsView from './Comments'

class StoryView extends Component {

  constructor() {
    super()

    this.state = {
      showComments: false,
    }
  }

  handleOnToggleComments(showComments) {
    this.setState({ showComments })
  }

  render() {
    const { data, n} = this.props
    const { showComments } = this.state

    return (
      <Story
        data={data}
        n={n}
        showComments={showComments}
        onToggleComments={show => this.handleOnToggleComments(show)}
      >
        {showComments && <CommentsView parent={data.id} />}
      </Story>
    )
  }

}

export default StoryView
