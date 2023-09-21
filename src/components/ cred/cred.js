import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import img1 from "../../assets/images/pages/img1.jpg";
import img2 from "../../assets/images/pages/img8.jpg";
import img3 from "../../assets/images/pages/img4.jpg";
import "../home/home.css";
import LearnMore from "../learn/learn_more";

function Cred() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/cred")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /cred:", error);
      });
  }, []);

  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">{data.titulo1}</div>
          <div className="section-text__subtitle">{data.subtitulo}</div>
          <div className="section-text__body">{data.texto3}</div>
          <LearnMore />
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
            <div className="section-carousel__image">
              <img src={img1} alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cred;
