/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/App.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  function nextSlide(){
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  function prevSlide(){
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }
  return (
    <div className="carousel-conteiner">
      <img
        src="./src/images/arrow.png"
        className="arrow left-arrow"
        alt="left arrow"
        onClick={prevSlide}
      />
      {data.map((image, id) => {
        return (
          <img className={slide === id ? "slide" : "slide slide-hidden"} src={image.src} alt={image.src} key={id} />
        );
      })}
      <img
        src="../src/images/arrow.png"
        className="arrow right-arrow"
        alt="right arrow"
        onClick={nextSlide}
      />
      <span className="bullets">
        {data.map((none, id) => {
          return <button key={id} onClick={null} className={slide === id ? "bullet" : "bullet bullet-inactive"}></button>;
        })}
      </span>
    </div>
  );
}

export default Carousel;
