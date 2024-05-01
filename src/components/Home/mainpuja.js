import React from 'react'
import "../Puja/puja.css"
// import PujaCards from './cards';
import MainPujaCard from './Main_pujaCard';
import image1 from "../Aasets/main_home_img.jpeg"
import { useNavigate } from 'react-router-dom';


const Mainpuja = () => {
    const navigate = useNavigate();
  return (
    <div className='secc'>
        <div className="shift-left">
    {/* mahamritujay jaap, rudraabhisekh, navgragr, kaalshrpdosh  */}
    <p className='title is-3 maintitle'>Some Most Popular Puja.</p>
    <div className="container">
        <section className="section">
            <div className="main-columns">
                <div className="column is-3 pujalist">
                    <MainPujaCard title="महामृत्युंजय जाप" price="@2100" image={image1}/>
                </div>
                <div className="column is-3 pujalist">
                    <MainPujaCard title="रुद्राभिषेक" price="@1100" image={image1}/>
                </div>
                <div className="column is-3 pujalist">
                    <MainPujaCard title="नवग्रह " price="@1100" image={image1}/>
                </div>
                <div className="column is-3 pujalist">
                    <MainPujaCard title="काल सर्प " price="@2100" image={image1}/>
                </div>
            </div>
        </section>
    </div>
    </div>
    </div>
  )
}

export default Mainpuja
