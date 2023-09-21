import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./header.css";
import img1 from "../../assets/images/pages/img16.jpg";
import img2 from "../../assets/images/pages/img15.jpg";
import img3 from "../../assets/images/pages/img18.jpg";
import LearnMore from "../learn/learn_more";

function Header() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/partners")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /partners:", error);
      });
  }, []);

  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">{data.titulo3}</div>
          <div className="section-text__subtitle">{data.header}</div>
          <div className="section-text__body">
            {data.footer}
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

export default Header;
