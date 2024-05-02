import React, { useEffect, useState } from "react";
import "./Home.css";
import introCard from "./introCard";
import img_home from "../Aasets/img_home.jpg";
import img_home7 from "../Aasets/img_home7.jpg";
import img_home6 from "../Aasets/img_home6.jpg";
import img_home8 from "../Aasets/img_home8.jpg";

const images = [img_home, img_home6, img_home7, img_home8];

const ImageSlide = ({ introCard }) => {
  const [Curr, setCurr] = useState(0);
  const nextSlide = () => {
    setCurr(Curr === images.length - 1 ? 0 : Curr + 1);
  };
  const prevSlide = () => {
    setCurr(Curr === 0 ? images.length - 1 : Curr - 1);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      const timer = (Curr + 1) % images.length;
      setCurr(timer);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [Curr, images]);
  return (
    <div className="holehome">
      <div className="container-my-5">
        <div className="row text-center">
          <div id="carouselExample" className="carousel-slide">
            {images.map(
              (value, index) =>
                Curr === index && (
                  <div className="carousel-inner">
                    <div className="carousel-item-active">
                      <img src={value} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
