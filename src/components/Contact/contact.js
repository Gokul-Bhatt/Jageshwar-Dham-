import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    username: "",
    phone: "",
    message: "",
  });


  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(`http://localhost:3000/home/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }  
      navigate("/");
      alert("Message send")
      console.log(response);
    } catch (error) {
      console.log("Register", error);
    }
  };
  return (
    <div className="contact">
      <div className="mid">
      <form onSubmit={handlesubmit} className="form">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Name"
            id="username"
            required
            autoCapitalize="off"
            value={contact.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            id="phone"
            required
            autoCapitalize="off"
            value={contact.phone}
            onChange={handleInput}
          />
        </div>
          <textarea
          name="message"
          placeholder="Message"
          id="text"
          cols="36"
          rows="8"
          className="inputt"
          value={contact.message}
            onChange={handleInput}
          >
          Message
        </textarea>
        <br />
        <button type="submit" className="btn button">
          Send
        </button>
      </form>

      <div className="contactMe">
        <h1>पंडित केवल भट्ट </h1>
        <h3> Phone: 84750320230, 9456539399</h3>
        <h3>Email: kewal.bhatt@yahoo.com</h3>
        <h3>Instagram: kewal_bhatt_11</h3>
      </div>
      </div>
    </div>
  );
};

export default Contact;
