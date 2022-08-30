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
      posts = this.state.feed.map((element) => <Post key={element.id} post={element} />)
      return (<Container className="d-flex justify-content-center"><div className='mt-3'>{posts}</div></Container>);
    }
    else return (<div>Loading...</div>)

  }
}

export default Feed;