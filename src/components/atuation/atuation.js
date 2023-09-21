import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import '../home/home.css';
import img1 from '../../assets/images/pages/img14.jpg'
import img2 from '../../assets/images/pages/img20.jpg'
import img3 from '../../assets/images/pages/img21.jpg'

function Atuation() {
  const [aboutData, setAboutData] = useState({});
 
  useEffect(() => {
    // Faça uma solicitação HTTP para o backend para buscar os dados da rota /about
    api
      .get("/impacts") // Certifique-se de que a URL corresponda à rota do seu backend
      .then((response) => {
        setAboutData(response.data.data); // Supondo que os dados do backend estão na propriedade "data"
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
    }, []);

  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">{aboutData.titulo1}</div>
          <div className="section-text__subtitle">
          {aboutData.titulo2}
          </div>
          <div className="section-text__body">
          <p>{aboutData.texto1}</p>
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
            <div className="section-carousel__image">
              <img src={img1} alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Atuation;
