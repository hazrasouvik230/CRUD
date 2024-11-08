// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() =>{
//     axios.get("http://localhost:5000")
//     .then((result) => setUsers(result.data))
//     .catch((error) => console.error(`Error fetching users: ${error}`))
//   }, [])

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/deleteUser/${id}`)
//     .then(() => setUsers(users.filter(user => user._id !== id)))
//     .catch((error) => console.error(`Error deleting user: ${error}`))
//   }

//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className="w-50 bg-white rounded p-3">
//         <Link to='/create' className="btn btn-success">Add</Link>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               users.map((user) => {
//                 <tr key={user._id}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.age}</td>
//                   <td>
//                     <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Edit</Link>
//                     <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button>
//                   </td>
//                 </tr>
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Users;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:5000")
    .then((result) => setUsers(result.data))
    .catch((error) => console.log(error))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteUser/${id}`)
    .then((result) => {
      console.log(result)
      // window.location.reload()
      setUsers(users.filter(user => user._id !== id))
    })
    .catch((error) => console.log(error))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <Link to='/create' className="btn btn-success">Add</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Users;