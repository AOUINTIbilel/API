import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const userCart = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" />
      <Card.Body>
        <Card.Title> {user.name +  " " + user.username} </Card.Title>
        <Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item> <h5> Email :  </h5>{user.email}</ListGroup.Item>
        <ListGroup.Item><h5> Street :  </h5> {user.address.street}</ListGroup.Item>
        <ListGroup.Item><h5> City :  </h5>{user.address.city}</ListGroup.Item>
        <ListGroup.Item><h5> Geo :  </h5>{user.address.geo.lat}</ListGroup.Item>
      </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default userCart