import React, { useEffect, useState } from 'react'
// import { useAuth } from "../Store/auth"
import "./AdminLayout.css";

const AdminUsers = () => {
const [users, setUsers] = useState([]);
const [token, setToken] = useState(localStorage.getItem("token"));
const userauthorizationToken = token;
  // const {userauthorizationToken} = useAuth();
  // console.log("*******************",userauthorizationToken,"###########################");
  const getAllUSersData = async()=>{
    try {
      const response = await fetch("http://localhost:3000/admin/users",{
        method:"GET",
        headers:{
              Authorization: userauthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      // console.log("******************************",data,"########################");
      
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser= async (id)=>{
    try{
    const response = await fetch(`http://localhost:3000/admin/users/delete/${id}`,{
      method:"DELETE",
      headers:{
            Authorization: userauthorizationToken,
      },
  });
  const data = await response.json();
      console.log("user after delete",data);
      if(response.ok){
        getAllUSersData();
      }
}
catch(error){
  console.log(error)
}
};
  useEffect(()=>{
    getAllUSersData();
  },[]);
  return (
    <div className='admin'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Puja</th>
            <th>Date</th>
            <th>Time</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(users)&&users.map((curUser, index)=>{
                return ( <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>{curUser.puja}</td>
                  <td>{curUser.date}</td>
                  <td>{curUser.time}</td>
                  <td>Edit</td>
                  <td><button className='button' onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                </tr>
                );
              })}
        </tbody>
      </table>
     
     
    </div>
  )
}

export default AdminUsers
