import React, { useCallback, useEffect, useState } from "react";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides, loop, pags, delay = 5, auto, navs }) => {
  if (!loop) auto = false;

  let interval = `${delay}000`;

  const dotsArray = Array.from({ length: slides ? slides.length : 0 }, (item, index) => {
    if (index === 0) {
      item = { id: index, isChecked: true };
    } else {
      item = { id: index, isChecked: false };
    }
    return item;
  });

  let [slide, setSlide] = useState(0);

  const [dots, setDots] = useState(dotsArray);

  useEffect(() => {
    if (auto) {
      const timer = setTimeout(() => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
        setDot(slide === slides.length - 1 ? 0 : slide + 1);
      }, interval);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [auto, interval, slide, slides]);

  const setDot = useCallback((id) => {
    const newDots = dots.map((item) => {
      if (item.id === id) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      return item;
    });
    setDots(newDots);
  }, [dots]);

  const handleDotChecked = (id) => {
    setDot(id);
    setSlide(id);
  };

  const handlePrevSlide = useCallback(() => {
    if (loop) {
      setSlide(slide === 0 ? slides.length - 1 : slide - 1);
      setDot(slide === 0 ? slides.length - 1 : slide - 1);
    } else {
      setSlide(slide === 0 ? 0 : slide - 1);
      setDot(slide === 0 ? 0 : slide - 1);
    }
  }, [loop, setDot, slide, slides]);

  const handleNextSlide = useCallback(() => {
    if (loop) {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1);
      setDot(slide === slides.length - 1 ? 0 : slide + 1);
    } else {
      setSlide(slide === slides.length - 1 ? slides.length - 1 : slide + 1);
      setDot(slide === slides.length - 1 ? slides.length - 1 : slide + 1);
    }
  }, [loop, setDot, slide, slides]);

  return (
      <div className="slider__container">
        <div className="slider__counter">
          <span className="slider__counter--start">{slide + 1}</span>/
          <span className="slider__counter--end">{slides ? slides.length : 0}</span>
        </div>
        <div className="slider__slides">
          {navs && (
            <div className="slider__arrow">
              <div className="arrow slider__arrow--left" onClick={handlePrevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="arrow slider__arrow--right" onClick={handleNextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          )}

          {slides && slides.length > 0 && (
            <div className="slide_item">
              <img className="slider__img" src={slides[slide].img} alt="" />
              <div className="slide_text">{slides[slide].text}</div>
            </div>
          )}
        </div>
        <div className="slider__dots">
          {pags &&
            dots.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDotChecked(index)}
                className={`slider__dot ${item.isChecked ? "active" : ""}`}
              ></div>
            ))}
        </div>
      </div>
  );
};

export default Slider;
