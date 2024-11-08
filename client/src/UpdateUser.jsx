// import React, {useState, useEffect} from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function UpdateUser() {
//   const {id} = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const navigate = useNavigate();

//   useEffect(() =>{
//     axios.get(`http://localhost:5000/getUser/${id}`)
//     .then((result) => {
//       setName(result.data.name)
//       setEmail(result.data.email)
//       setAge(result.data.age)
//     })
//     .catch((error) => console.error(`Error fetching user: ${error}`))
//   }, [id]);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     if (!name || !email || !age) {
//       alert("Please fill out all fields");
//       return;
//     }
    
//     axios.put(`http://localhost:5000/updateUser/${id}`, {name, email, age})
//     .then(() => navigate("/"))
//     .catch((error) => console.error(`Error updating user: ${error}`))
//   };

//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className="w-50 bg-white rounded p-3">
//         <form action="" onSubmit={handleUpdate}>
//           <h2>Update User</h2>
//           <div className="mb-2">
//             <label htmlFor="name">Name</label>
//             <input type="text" id='name' placeholder='Enter Name' className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email">Email</label>
//             <input type="email" id='email' placeholder='Enter Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="age">Age</label>
//             <input type="text" id='age' placeholder='Enter Age' className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
//           </div>
//           <button type='submit' className='btn btn-success'>Update</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default UpdateUser;

import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const {id} = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() =>{
    axios.get(`http://localhost:5000/getUser/${id}`)
    .then((result) => {
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch((error) => console.log(error))
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:5000/updateUser/${id}`, {name, email, age})
    .then((result) => {
      console.log(result)
      navigate("/");
    })
    .catch((error) => console.log(error))
  }

  const handleCancle = (e) => {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <form action="" onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className='d-flex align-items-center justify-content-end'>
            <button className='btn btn-danger me-2' onClick={handleCancle}>Cancle</button>
            <button className='btn btn-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser;