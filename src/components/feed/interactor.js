import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as rfaThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown as rfaThumbsDown } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

class Interactor extends Component {
    state = {
        like: rfaThumbsUp,
        dislike: rfaThumbsDown,
        likecount: this.props.like.like,
        dislikecount: this.props.like.dislike,
    };

    render() {
        return (<div className="d-flex justify-content-between">
            <Button variant="primary" onClick={() => this.setState(this.state.like === rfaThumbsUp ? (this.state.dislike === faThumbsDown ? { like: faThumbsUp, dislike: rfaThumbsDown, likecount: this.state.likecount + 1, dislikecount: this.state.dislikecount - 1 } : { like: faThumbsUp, likecount: this.state.likecount + 1 }) : { like: rfaThumbsUp, likecount: this.state.likecount - 1 })}><FontAwesomeIcon icon={this.state.like} /> {this.state.likecount}</Button>
            <Button variant="primary" onClick={() => this.setState(this.state.dislike === rfaThumbsDown ? (this.state.like === faThumbsUp ? { like: rfaThumbsUp, dislike: faThumbsDown, likecount: this.state.likecount - 1, dislikecount: this.state.dislikecount + 1 } : { dislike: faThumbsDown, dislikecount: this.state.dislikecount + 1 }) : { dislike: rfaThumbsDown, dislikecount: this.state.dislikecount - 1 })}><FontAwesomeIcon icon={this.state.dislike} /> {this.state.dislikecount}</Button>
        </div>
        );
    }
}

export default Interactor;