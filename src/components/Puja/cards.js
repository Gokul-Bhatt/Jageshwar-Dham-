// import { useState } from "react";
import "./puja.css"
import { useNavigate } from "react-router-dom";

function PujaCards({title, price, description,image}){
    const navigate = useNavigate();
    return(
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
                    <button className="button" onClick={()=> navigate("./register")}>Book</button>
                </div>
                
            </div>
        </div>
    )
}
export default PujaCards;