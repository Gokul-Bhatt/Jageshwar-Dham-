// import { useState } from "react";
import "./puja.css"
import { useNavigate } from "react-router-dom";

// function PujaCards({title, price, description,image}){
    function PujaCards({image,title,price}){
    const navigate = useNavigate();
    return(
        // <div className="cards">
        //     <div className="card-image">
        //         <figure className="image is-1by1 myimage">
        //             <img src={image} alt="images" />
        //         </figure>
        //     </div>
        //     <div className="card-content">
        //         <div className="media-content mythink">
        //             <p className="title is-5 mytitle">{title}</p>
        //             <p className="subtitle is-5 myprice">{price}</p>
        //             <button className="button" onClick={()=> navigate("./register")}>Book</button>
        //         </div>
                
        //     </div>
        // </div>
        <div className="w-60 border-2 border-yellow-600 ">
      <div className="images w-56 h-60">
        <img className="w-48 h-56" src={image} alt="Image" />
      </div>
      <div className="border border-orange-700 bg-gray-100 h-32 ">
        <p className="text-black font-semibold">{title}</p>
        <p className="text-black font-semibold">{price}</p>
        <button className=" text-black font-semibold bg-green-500 border-2 border-green-600 p-2 w-40 rounded-lg hover:bg-green-600 hover:text-white ml-9" onClick={()=> navigate("./register")}>Book</button>
      </div>
    </div>
    )
}
export default PujaCards;