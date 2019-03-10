import React, { Component, Fragment } from 'react';

import CommentBox from '../components/CommentsBox'
import Loading from '../components/Loading'

import ApiService from '../services/Api'

class CommentsView extends Component {

  constructor(props){
    super(props)

    this.state = {
      comments: [],
      parentId: this.props.parent,
      isLoading: false,
      showComments: [],
    }

  }

  handleOnToggleComments(id) {
    const { showComments } = this.state
    const isShowing = showComments.find((el) => el === id)
    let filteredShows = [ ...showComments ]

    if(!isShowing)
      filteredShows = [...showComments, id]
    else
      filteredShows = showComments.filter(el => el !== id)

    this.setState({
      showComments: filteredShows
    })
  }

  componentDidMount() {
    this.loadContent()
  }

  loadContent() {
    this.setState({ isLoading: true })
    ApiService.getComments(this.state.parentId)
    .then(data => {
      this.setState({
        comments: [...this.state.comments, ...data.items],
        isLoading: false,
      })
    })
    .catch(err => this.setState({
      isLoading: false,
      err,
    }))
  }

  renderComments() {
    const { comments, showComments } = this.state

    return comments.map(comment => (
      <CommentBox
        {...comment}
        key={comment.id}
        onToggleComments={(id) => this.handleOnToggleComments(id)}
      >
        {showComments.includes(comment.id) && <CommentsView parent={comment.id} />}
      </CommentBox>
    ))
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading && <Loading />}

        {this.renderComments()}
      </Fragment>
    )
  }
}

export default CommentsView;
