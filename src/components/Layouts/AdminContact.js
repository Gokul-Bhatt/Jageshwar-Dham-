// import React from 'react'
import React, { useEffect, useState } from 'react'
// import { useAuth } from "../Store/auth"
import "./AdminLayout.css";

const AdminContact = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const userauthorizationToken = token;


  // const {userauthorizationToken} = useAuth();
  const getAllContactData = async()=>{
    try {
      const response = await fetch("http://localhost:3000/admin/contact",{
        method:"GET",
        headers:{
              Authorization: userauthorizationToken,
        },
      });
      const data = await response.json();
      console.log("user",data);
      setUsers(data);
      
    } catch (error) {
      console.log(error)
    }
  }

const deletecontact = async (id)=>{
  try {
    const response = await fetch(`http://localhost:3000/admin/contact/delete/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:userauthorizationToken,
      },
    });
    const data = await response.json();
    console.log("user after delete", data);
    if(response.ok){
      getAllContactData();
    }
  } catch (error) {
    console.log(error);
  }
};

  useEffect(()=>{
    getAllContactData();
  },[]);
  return (
    <div className='admin'>
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(users) && users.map((curUser, index)=>{
              return <tr key={index}>
                <td>{curUser.username}</td>
                <td>{curUser.phone}</td>
                <td>{curUser.message}</td>
                <td>Edit</td>
                <td><button  className='button' onClick={()=>deletecontact(curUser._id)}>Delete</button></td>
              </tr>
            })}
      </tbody>
    </table>
 
   
  </div>
  )
}

export default AdminContact
