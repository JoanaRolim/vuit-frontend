import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./newsletter.css";

export default function Newsletter() {
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
    <div className="outer-container">
      <div className="footer-container">
        <div className="news-letter">
          <div className="letter-title">{data.titulo4}</div>
          <div className="letter-description">{data.footer}</div>

          <div className="form-group">
            <input
              className="NewsletterInput"
              type="mail"
              placeholder="Escreva seu Email"
            />
            <button className="NewsletterButton">Se Inscrever</button>
          </div>

          <div className="social-block">
            <ul className="social-media">
              <li className="social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
              </li>
              <li className="social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li className="social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className="social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </li>
              <li className="social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <GrMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
