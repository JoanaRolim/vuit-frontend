import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./statistics.css";

function Statistics() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/numbers")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /numbers:", error);
      });
  }, []);
  return (
    <section id="pricing">
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">{data.associados}</span>
              <div className="pricing-card__title">{data.titulo1}</div>
            </div>
            <ul className="pricing-card__features">
              <li>
                <span>{data.texto1}</span>
              </li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Conheça Mais
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">{data.empresas}</span>
              <div className="pricing-card__title">{data.titulo2}</div>
            </div>
            <ul className="pricing-card__features">
              <li>{data.texto2}</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Conheça Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
