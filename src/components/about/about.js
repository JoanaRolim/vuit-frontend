import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./about.css";
import aboutImg from "../../assets/images/pages/img12.jpg";
import Mission from "../mission/mission";
import Team from "../team/team";
import Statistics from "../dashboard/statistics";
import Values from "../values/values";
import Send from "../send/send";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Atuation from "../atuation/atuation";

export const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});
  const [reasonsData, setReasonsData] = useState({});

  useEffect(() => {
    api
      .get("/about")
      .then((response) => {
        setAboutData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/reasons")
      .then((response) => {
        setReasonsData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /reasons:", error);
      });
  }, []);

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src={aboutImg} className="img-responsive" alt="about" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>{aboutData.titulo}</h2>
                <p>{aboutData.texto1}</p>
                <h3>{reasonsData.titulo2}</h3>
                <div className="list-style">
                  <div>
                    <p>{reasonsData.titulo1}</p>
                    <ul>
                      <li>{reasonsData.r1}</li>
                      <li>{reasonsData.r2}</li>
                      <li>{reasonsData.r3}</li>
                      <li>{reasonsData.r4}</li>
                      <li>{reasonsData.r5}</li>
                      <li>{reasonsData.r6}</li>
                      <li>{reasonsData.r7}</li>
                      <li>{reasonsData.r8}</li>
                      <li>{reasonsData.r9}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Mission />
      <Values />
      <Atuation />
      <Statistics />
      <Team />

      <div style={{ marginTop: "200px" }}>
        <Send />
      </div>
      <div>
        <div>
          <p className="footer-text">Nos siga nas redes sociais:</p>
        </div>
        <ul className="footer-social-media">
          <li className="footer-social-media-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="footer-social-media-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="footer-social-media-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li className="footer-social-media-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
          <li className="footer-social-media-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <GrMail />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
