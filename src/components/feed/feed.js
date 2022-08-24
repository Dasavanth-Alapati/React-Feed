import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { fetchfeed } from '../../api/api';
import Post from './post';

class Feed extends Component {
  state = { feed: null }
  componentDidMount() {
    fetchfeed().then(res => {
      this.setState({ feed: res.data });
    })
  }

  render() {
    let posts = []
    if (this.state.feed !== null) {
      for (let i = 0; i < this.state.feed.length; i++) {
        const element = this.state.feed[i];
        posts.push(<Post key={element.id} post={element} />)
      }
      return (<Container className="d-flex justify-content-center"><div className='mt-3'>{posts}</div></Container>);
    }
    else return (<div>Loading...</div>)

  }
}

export default Feed;