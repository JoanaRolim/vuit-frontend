import React from "react";
import { Icon } from "@mui/material";
import {
  Favorite,
  Home,
  LocalDining,
  Book,
  AccessibilityNew,
  HelpOutline,
  School,
  QuestionAnswer,
} from "@mui/icons-material";
import "./categories.css";

class Categories extends React.Component {
  render() {
    return (
      <div>
        <ul className="footer-social-media">
          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Home />
              </a>
              <h6>Seguro Garantia</h6>
            </div>
          </li>

          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <AccessibilityNew />
              </a>
              <h6>Seguro de Vida em Grupo</h6>
            </div>
          </li>

          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Book />
              </a>
              <h6>Prestação de Serviços</h6>
            </div>
          </li>

          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Favorite />
              </a>
              <h6>Seguro Saúde</h6>
            </div>
          </li>

          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <HelpOutline />
              </a>
              <h6>Crédito Consignado</h6>
            </div>
          </li>

          <li className="footer-social-media-item">
            <div className="icon-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <QuestionAnswer />
              </a>
              <h6>Outros Serviços</h6>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
