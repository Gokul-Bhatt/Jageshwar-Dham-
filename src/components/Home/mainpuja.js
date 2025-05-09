import React from "react";
import "../Puja/puja.css";
import "../Home/Home.css";
// import PujaCards from './cards';
import MainPujaCard from "./Main_pujaCard";
import image1 from "../Aasets/main_home_img.jpeg";
import { useNavigate } from "react-router-dom";

const Mainpuja = () => {
  const navigate = useNavigate();
  return (
    <div className="secc">
      <div className=" titleM mainbgg">
        <p className=" text-3xl items-center justify-center text-black flex font-semibold">
          जागेश्वर धाम में ये पूजाएं उपलब्ध हैं, पूजा कराने के लिए बुक करें।
        </p>
      </div>
      <div className="mainbgg">
        <section className="section">
          <div className="columns mx-6">
            <div className="column is-3 pujalist">
              <MainPujaCard
                title="महामृत्युंजय जाप"price="@2100"image={image1}/>
            </div>
            <div className="column is-3 pujalist">
              <MainPujaCard title="रुद्राभिषेक" price="@1100" image={image1} />
            </div>
            <div className="column is-3 pujalist">
              <MainPujaCard title="नवग्रह " price="@1100" image={image1} />
            </div>
            <div className="column is-3 pujalist">
              <MainPujaCard title="काल सर्प " price="@2100" image={image1} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mainpuja;
