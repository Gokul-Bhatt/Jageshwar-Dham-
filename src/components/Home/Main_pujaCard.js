import React from 'react'
import "../Puja/puja.css"
import { useNavigate } from "react-router-dom";

function MainPujaCard({title, price, description,image}){
    const navigate = useNavigate();
  return (
    <div className="cards">
    <div className="card-image">
        <figure className="image is-1by1 myimage">
            <img src={image} alt="images" />
        </figure>
    </div>
    <div className="card-content">
        <div className="media-content mythink">
            <p className="title is-5 mytitle">{title}</p>
            <p className="subtitle is-5 myprice">{price}</p>
            <button className="button" onClick={()=> navigate("/puja/register")}>Book</button>
        </div>
        
    </div>
</div>
  )
}

export default MainPujaCard;
