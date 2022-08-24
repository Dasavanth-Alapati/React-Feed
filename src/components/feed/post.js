import Card from 'react-bootstrap/Card';
import Interactor from './interactor';
import * as moment from 'moment';


function Post(props) {

  return (
    <Card style={{  width: "30rem" , marginBottom: '2rem' }}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>
          {props.post.content}
        </Card.Text>
        <Card.Text><small span>{props.post.profileid.credid.username}</small></Card.Text>
        <Interactor></Interactor>
      </Card.Body>
      <Card.Footer className="text-muted">{moment(props.post.created_at).fromNow()}</Card.Footer>
    </Card>
  );
}

export default Post;