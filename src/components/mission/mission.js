import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import './mission.css';
import img1 from '../../assets/images/pages/img17.jpg'
import img2 from '../../assets/images/pages/img13.jpg'
import img3 from '../../assets/images/pages/img1.jpg'

function Mission() {
  const [aboutData, setAboutData] = useState({});
 
  useEffect(() => {
    // Faça uma solicitação HTTP para o backend para buscar os dados da rota /about
    api
      .get("/about") // Certifique-se de que a URL corresponda à rota do seu backend
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
          <div className="section-text__title">{aboutData.header2}</div>
          <div className="section-text__body">
          <p>{aboutData.texto2}</p>
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

export default Mission;
