import React from 'react'
import "./Home.css"
import img_main from '../Aasets/img_main.jpg'
import { useNavigate } from 'react-router-dom'

const IntroCard = () => {
  const navigate = useNavigate();
  return (
    <div className="holehome">
    <div className='mainhome'>
    <div className="imagecontainer">
      <div className="right">
  <img src={img_main} alt="photo" />
  <h1>पंडित भगवान भट्ट</h1>
  <h1>पंडित केवल भट्ट</h1>
 <b> 
  <p>पुजारी महामृत्युंजय मंदिर, <br />
 जागेश्वर धाम अल्मोड़ा, <br />
 उत्तराखण्ड</p>
 </b>
  </div>
  <div className="left">
    <h2>जय श्री जागेश्वर धाम 🙏</h2><br />
    <div className="mantr">
    <h1>ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् </h1>
     <h1>उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् </h1>
     </div>
     <b>
     <p>कष्ट निवारण हेतु- काल सर्प दोष,
      महामृत्युजय जाप, श्री सुक्त पाठ, <br />कनक धारा पाठ, नव ग्रह पाठ, रूद्राभिषेक, लक्ष्मी पाठ एवं भैरव पाठ विधि विधान से किया जाता है।<br />
      <button className='button' onClick={()=>navigate("/puja")}>Book Puja</button>
      </p>
      </b>
     </div>
  </div>
</div>
</div>
)
}

export default IntroCard
