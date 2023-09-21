import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [titulo1, setTitulo1] = useState("");

  useEffect(() => {
    api
      .get("/reviews")
      .then((response) => {
        setReviews(response.data.data.reviews);
        setTitulo1(response.data.data.titulo1);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /reviews:", error);
      });
  }, []);

  const checkIndex = (number) => {
    if (number >= reviews.length) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => checkIndex(currentIndex + 1));
  };

  const prevPerson = () => {
    setIndex((currentIndex) => checkIndex(currentIndex - 1));
  };

  const randomPerson = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * reviews.length);
    } while (randomNumber === index); 
    setIndex(randomNumber);
  };

  if (reviews.length === 0) {
    return <div>Carregando revisões...</div>;
  }

  const { title, name, rating, text } = reviews[index];

  return (
    <article className="review">
      <div className="title_review">
        {titulo1}
      </div>
      <div className="author_review">{title}</div>
      <div className="author">{name}</div>
      <p className="job">{rating}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Faça sua Simulação
      </button>
    </article>
  );
};

export default Review;
