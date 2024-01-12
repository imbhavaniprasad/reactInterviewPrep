import React, { useState } from "react";
import "./index.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Slider = () => {
  const imageUrl = "https://api.slingacademy.com/public/sample-photos/";
  const [currImage, setCurrImage] = useState(1);
  const handleSlide = (dir) => {
    if (dir == "right") {
      setCurrImage((prev) => (prev + 1 > 5 ? 1 : prev + 1));
    } else setCurrImage((prev) => (prev - 1 == 0 ? 5 : prev - 1));
  };
  return (
    <div className="slider">
      <div className="img_container">
        <img src={`${imageUrl + currImage + ".jpeg"}`} />;
        <div className="arrow left">
          <FaArrowLeft onClick={() => handleSlide("left")} />
        </div>
        <div className="arrow right">
          <FaArrowRight onClick={() => handleSlide("right")} />
        </div>
        {/* <div className="indicators">
        {[...Array(5)].map((i, idx) => {
          return <img key={idx} src={`${imageUrl + currImage + ".jpeg"}`} />;
        })}
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
