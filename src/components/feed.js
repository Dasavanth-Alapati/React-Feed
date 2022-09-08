import { isLoggedIn } from 'axios-jwt';
import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchfeed } from '../services/api';
import Post from './post';

class Feed extends Component {
  state = { feed: null }
  componentDidMount() {
    if (isLoggedIn())
      fetchfeed().then(res => {
        this.setState({ feed: res.data });
      })
  }

  render() {
    let posts = []
    if (isLoggedIn()) {
      if (this.state.feed !== null) {
        posts = this.state.feed.map((element) => <Post key={element.id} post={element} />)
        return (<Container className="d-flex justify-content-center"><div className='mt-3'>{posts}</div></Container>);
      }
      else return (<div><Spinner animation='border' variant='primary' size='sm' ></Spinner>Loading...</div>)
    }
    else return (<><Container>Welcome, please <Link to='/login'>Signin</Link></Container></>);
  }
}

export default Feed;