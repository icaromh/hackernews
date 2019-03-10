import React, { Component } from 'react';
import Story from '../components/Story'
import BackgroundCanvas from '../components/BackgroundCanvas'


class StoriesView extends Component {

  constructor(){
    super()

    this.state = {
      items: [],
    }

  }

  componentWillMount() {
    fetch('http://localhost:3001/stories')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: [...this.state.items, ...data.items] })
    })
  }

  render() {
    const { items } = this.state
    console.log(items[0])
    return (
      <BackgroundCanvas>
        {items.map((el, i) => (
          <Story key={el.id} data={el} n={i} />
        ))}
      </BackgroundCanvas>
    );
  }
}

export default StoriesView;
