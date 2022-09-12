import Card from 'react-bootstrap/Card';
import Interactor from './interactor';
import moment from 'moment';


const Post = (props) => {

  return (
    <Card style={{ width: "30rem", marginBottom: '2rem' }}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>
          {props.post.content}
        </Card.Text>
        <Card.Subtitle><small>{props.post.profileid.credid.username}</small></Card.Subtitle><br />
        <Interactor like={props.post.like}></Interactor>
      </Card.Body>
      <Card.Footer className="text-muted">{moment(props.post.created_at).fromNow()}</Card.Footer>
    </Card>
  );
}

export default Post;