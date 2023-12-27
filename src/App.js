import {useEffect, useState} from "react";
import axios from "axios";
import UserList from "./Component/UserList";


function App() { 
  const [users , setUser] = useState([])
  const [loadUsers , setLoadUsers] = useState(true);
  const getUsers = async()=>{
 const userResult = 
 await axios.get('https://jsonplaceholder.typicode.com/users')
console.log("userResult :  " , userResult.data)
 setLoadUsers(false)
setUser(userResult.data)
}
useEffect(()=> {
  getUsers()
},[])
  return (
    <div>
      <UserList users={users} loadUsers={loadUsers}/>
    </div>
  );
}

export default App;
