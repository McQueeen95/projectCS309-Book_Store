import { useState } from "react";
import firstimages from "..///./../images/book1.png";
import secondimages from "..///./../images/book2.png";
import thirdimages from "..///./../images/book3.png";
import slider from "./slider.css";

const Slider = () => {
  const [setindex, setindexslide] = useState("0");
  const handclick = (direction) => {
    if (direction === "left") {
      setindexslide(setindex>0 ? setindex - 1:2);
    } else {
      setindexslide( setindex<2?  setindex + 1:0);
    }
  };
  return (
    <div className="slider-container">
         
      <i
        onClick={() => handclick("left")}
        class="bi bi-chevron-double-left arrow-left"
      ></i>
      <div
        style={{ transform: `translateX(${setindex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={firstimages}></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title"> Book Store </h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={secondimages}></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title"> Book Store </h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>

        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={thirdimages}></img>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title"> Book Store </h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>
      </div>
      <i
        onClick={() => handclick("right")}
        class="bi bi-chevron-double-right arrow-right"
      ></i>
      
      
    </div>
  );
};

export default Slider;
