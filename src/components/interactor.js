import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as rfaThumbsUp, faThumbsDown as rfaThumbsDown } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const Interactor = (props) => {
    const id = useSelector(state => state.profile.data.id);
    const checkLike = (likeinfo) => {
        for (let i = 0; i < likeinfo.length; i++) {
            const element = likeinfo[i];
            if (element.profileid.id === id && element.likes === 'YES') return faThumbsUp;
        }
        return rfaThumbsUp;
    };
    const checkDislike = (likeinfo) => {
        for (let i = 0; i < likeinfo.length; i++) {
            const element = likeinfo[i];
            if (element.profileid.id === id && element.likes === 'NO') return faThumbsDown;
        }
        return rfaThumbsDown;
    };
    const [state, setState] = useState({
        like: checkLike(props.like.likeinfo),
        dislike: checkDislike(props.like.likeinfo),
        likecount: props.like.like,
        dislikecount: props.like.dislike,
    });
    const like = () => {
        let sudoState = { ...state };
        if (sudoState.like === rfaThumbsUp) {
            sudoState.like = faThumbsUp;
            sudoState.likecount += 1;
            if (sudoState.dislike === faThumbsDown) {
                sudoState.dislike = rfaThumbsDown;
                sudoState.dislikecount -= 1;
            }
        }
        else {
            sudoState.like = rfaThumbsUp;
            sudoState.likecount -= 1;
        }
        setState(sudoState);
    };
    const dislike = () => {
        let sudoState = { ...state };
        if (sudoState.dislike === rfaThumbsDown) {
            sudoState.dislike = faThumbsDown;
            sudoState.dislikecount += 1;
            if (sudoState.like === faThumbsUp) {
                sudoState.like = rfaThumbsUp;
                sudoState.likecount -= 1;
            }
        }
        else {
            sudoState.dislike = rfaThumbsDown;
            sudoState.dislikecount -= 1;
        }
        setState(sudoState);
    };

    return (<div className="d-flex justify-content-between">
        <Button variant="primary" onClick={() => like()}><FontAwesomeIcon icon={state.like} /> {state.likecount}</Button>
        <Button variant="primary" onClick={() => dislike()}><FontAwesomeIcon icon={state.dislike} /> {state.dislikecount}</Button>
    </div>
    );

}

export default Interactor;