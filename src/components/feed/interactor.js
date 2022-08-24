import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as rfaThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown as rfaThumbsDown } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

class Interactor extends Component {
    state = {   like:rfaThumbsUp,
                dislike:rfaThumbsDown,
       };
    render() { 
        return (<div className="d-flex justify-content-between">
        <Button variant="primary" onClick={() => this.setState(this.state.like === rfaThumbsUp ? {like:faThumbsUp,dislike:rfaThumbsDown} : {like:rfaThumbsUp})}><FontAwesomeIcon icon={this.state.like} /></Button>
        <Button variant="primary" onClick={() => this.setState(this.state.dislike === rfaThumbsDown ? {dislike:faThumbsDown,like:rfaThumbsUp} : {dislike:rfaThumbsDown})}><FontAwesomeIcon icon={this.state.dislike} /></Button>
        </div>
        );
    }
}
 
export default Interactor;