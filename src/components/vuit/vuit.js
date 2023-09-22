import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./vuit.css";
import img1 from "../../assets/images/pages/img3.jpg";
import img2 from "../../assets/images/pages/img2.jpg";
import img3 from "../../assets/images/pages/img6.jpg";
import LearnMore from "../learn/learn_more";

function Vuit() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/about")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);

  return (
    <section id="screenshots">
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">{data.subtitulo}</div>
          <div className="section-text__subtitle">{data.header2}</div>
          <div className="section-text__body">{data.texto1}</div>
          <div className="section-text__body">
            {data.texto2}
            <LearnMore />
          </div>
        </div>
        <div className="section-carousel">
          <div className="section-carousel__images">
            <div className="section-carousel__image">
              <img src={img1} alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src={img2} alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src={img3} alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vuit;
