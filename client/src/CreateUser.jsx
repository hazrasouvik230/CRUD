// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// function CreateUser() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!name || !email || !age) {
//       alert("Please fill out all fields");
//       return;
//     }

//     axios.post("http://localhost:5000/createUser", {name, email, age})
//     .then(() => navigate("/"))
//     .catch((error) => console.error(`Error creating user: ${error}`));
//   };

//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className="w-50 bg-white rounded p-3">
//         <form action="" onSubmit={handleSubmit}>
//           <h2>Add User</h2>
//           <div className="mb-2">
//             <label htmlFor="name">Name</label>
//             <input type="text" id='name' placeholder='Enter Name' className="form-control" onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email">Email</label>
//             <input type="email" id='email' placeholder='Enter Email' className="form-control" onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="age">Age</label>
//             <input type="text" id='age' placeholder='Enter Age' className="form-control" onChange={(e) => setAge(e.target.value)} />
//           </div>
//           <button type='submit' className='btn btn-success'>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateUser;


import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !age) {
      alert("Please fill out all fields");
      return;
    }

    axios.post("http://localhost:5000/createUser", {name, email, age})
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
        <form action="" onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className="form-control" onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className='d-flex align-items-center justify-content-end'>
            <button className='btn btn-danger me-2' onClick={handleCancle}>Cancle</button>
            <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser;