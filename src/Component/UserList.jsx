import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import UserCart from './UserCart';

const UserList = ({users , loadUsers}) => {
  console.log("users : " , users)
  return (
    <div style={{display: 'flex' , flexWrap:"wrap" ,justifyContent:"space-evenly"}}>
        {loadUsers ? (
        <>
           <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      </>
      ) : (
        users.map((user)=><UserCart key={user.id} user={user} />)
        )}
    </div>
  )
}

export default UserList