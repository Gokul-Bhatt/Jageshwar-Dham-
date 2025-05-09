
import React from 'react'
import "../Puja/puja.css"
import { useNavigate } from "react-router-dom";


function PujaCards({ image, title, price }) {
  const navigate = useNavigate();
  return (
    <div className="w-60 border-2 border-white-600 my-4 mx-4 bg-black ">
      <div className="images w-56 h-60 ">
        <img className="w-48 h-56 mx-5" src={image} alt="Image" />
      </div>
      <div className="border border-black bg-gray-100 h-32">
        <p className="text-black font-semibold mx-2 my-1">{title}</p>
        <p className="text-black font-semibold mx-2">{price}</p>
        <button
          className=" text-black font-semibold bg-green-500 border-2 border-green-600 p-2 w-48 rounded-full ml-4 hover:bg-green-800 hover:text-white "
          onClick={() => navigate("./register")}
        >
          Book
        </button>
      </div>
    </div>
  );
}
export default PujaCards;

// *************************************************************
// import React from 'react'
// import "../Puja/puja.css"
// import { useNavigate } from "react-router-dom";

// function MainPujaCard({title, price, description,image}){
//     const navigate = useNavigate();
//   return (
//     <div className="cards">
//     <div className="card-image">
//         <figure className="image is-1by1 myimage">
//             <img src={image} alt="images" />
//         </figure>
//     </div>
//     <div className="card-content">
//         <div className="media-content mythink">
//             <p className="title is-5 mytitle">{title}</p>
//             <p className="subtitle is-5 myprice">{price}</p>
//             <button className="button" onClick={()=> navigate("/puja/register")}>Book</button>
//         </div>
        
//     </div>
// </div>
//   )
// }

// export default MainPujaCard;
