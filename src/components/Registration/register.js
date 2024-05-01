import React, { useState } from 'react'
import "./register.css";
import { useNavigate } from 'react-router-dom';
// import backimg from "../Aasets/img_home3.jpg"
import {useAuth} from "../Store/auth";


const Register = (handlemiddlware) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        puja:"",
        date:"",
        time:""
      });
     
      const navigate  = useNavigate();

      const {storetokenInLS} = useAuth();
      const [addmid, setAddmid] = useState("");
      const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
          const response = await fetch(`http://localhost:3000/home/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
         const res_data = await response.json();
          console.log(res_data);


         const handlemiddlware = ()=>{
            setAddmid(res_data);
          }

          storetokenInLS(res_data.token);
          navigate("/puja");
          alert("Puja booked");
          }
           catch (error) {
          console.log(error);
        }

      };
     
  return (
    <div className='register bg'>
           <h1 className='title'>Fill The form For Puja Booking  </h1>
       <form onSubmit={handlesubmit} className='form'>
       <div>
                    <label htmlFor="puja"></label>
                    <input
                      type="puja"
                      name="puja"
                      placeholder="PUJA"
                      id="puja"
                      required
                      autoCapitalize="off"
                      value={user.puja} 
                    onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="Name"></label>
                    <input
                      type="text"
                      name="username"
                      placeholder="NAME"
                      id="Name"
                      required
                      autoCapitalize="off"
                      value={user.Name} 
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      id="email"
                      autoCapitalize="off"
                      value={user.email} 
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone"></label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="PHONE"
                      id="phone"
                      required
                      autoCapitalize="off"
                      value={user.phone} 
                      onChange={handleInput}
                      />
                  </div>
                  <div>
                    <label htmlFor="date"></label>
                    <input
                      type="date"
                      name="date"
                      placeholder="DATE"
                      id="date"
                      required
                      autoCapitalize="off"
                      value={user.date} 
                      onChange={handleInput}
                      />
                  </div>
                  <div>
                    <label htmlFor="time"></label>
                    <input
                      type="time"
                      name="time"
                      placeholder="TIME"
                      id="time"
                      required
                      autoCapitalize="off"
                      value={user.time} 
                      onChange={handleInput}
                      />
                  </div>
                  <br />
                  <button  type="submit" className="button btn" >
                    Book Now
                  </button>
                </form>
    </div>
  )
}

export default Register;
