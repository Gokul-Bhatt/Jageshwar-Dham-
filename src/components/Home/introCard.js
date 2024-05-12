import React from 'react'
import "./Home.css"
import img_main from '../Aasets/img_main.jpg'
import { useNavigate } from 'react-router-dom'

const IntroCard = () => {
  const navigate = useNavigate();
  return (
    <div className="holehome ">
    <div className='mainhome overflow-hidden flex flex-col w-4/5 bg-red-300 absolute left-1/2 transform -translate-x-1/2 mt-8'>
    <div className="imagecontainer flex text-black items-center justify-center font-serif ">
      <div className="right flex flex-col w-80 mt-4">
  <img src={img_main} alt="photo" className='w-40 rounded-full border-2 border-red-500' />
  <h1 className='text-lg font-semibold'>पंडित भगवान भट्ट</h1>
  <h1 className='text-lg font-semibold'>पंडित केवल भट्ट</h1>
 <b> 
  <p className='font-medium'>पुजारी महामृत्युंजय मंदिर, <br />
 जागेश्वर धाम अल्मोड़ा, <br />
 उत्तराखण्ड</p>
 </b>
  </div>
  <div className="left flex flex-col  items-center justify-center ">
    <h2 className='text-2xl font-semibold'>जय श्री जागेश्वर धाम 🙏</h2><br />
    <div className="mantr text-lg">
    <h1>ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् </h1>
     <h1>उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् </h1>
     </div>
     <b>
     <p className='mt-12'>कष्ट निवारण हेतु- काल सर्प दोष,
      महामृत्युजय जाप, श्री सुक्त पाठ, <br />कनक धारा पाठ, नव ग्रह पाठ, रूद्राभिषेक, लक्ष्मी पाठ एवं भैरव पाठ विधि विधान से किया जाता है।<br />
      <button className='button mt-12 bg-blue-500 text-white hover:bg-green-500' onClick={()=>navigate("/puja")}>Book Puja</button>
      </p>
      </b>
     </div>
  </div>
</div>
</div>
)
}

export default IntroCard
